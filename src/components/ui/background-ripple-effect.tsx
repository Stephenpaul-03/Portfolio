"use client";
import React, { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  clickedCell: externalClickedCell,
  onCellClick: externalOnCellClick,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
  fillColor?: string;
  clickedCell?: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
}) => {
  const [internalClickedCell, setInternalClickedCell] = useState<{ row: number; col: number } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);

  // Use external clicked cell if provided, otherwise use internal
  const clickedCell = externalClickedCell !== undefined ? externalClickedCell : internalClickedCell;

  // Update ripple key when clicked cell changes
  useEffect(() => {
    if (clickedCell) {
      setRippleKey((k) => k + 1);
    }
  }, [clickedCell]);

  const handleCellClick = (row: number, col: number) => {
    if (externalOnCellClick) {
      externalOnCellClick(row, col);
    } else {
      setInternalClickedCell({ row, col });
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full z-0",
        "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)]",
        "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)]",
        "[--ripple-color:#99c081]"
      )}
    >
      <div className="relative h-auto w-auto overflow-hidden">
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-60"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={handleCellClick}
          interactive
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, i) => i), [rows, cols]);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx) : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0;
        const duration = 200 + distance * 80;

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-opacity duration-150",
              "will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none"
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={interactive ? () => onCellClick(rowIdx, colIdx) : undefined}
          />
        );
      })}
    </div>
  );
};