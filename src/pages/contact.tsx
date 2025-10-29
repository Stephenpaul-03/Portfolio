"use client";

import { useState, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const handleButtonClick = (e: React.MouseEvent, url: string, id: string) => {
    e.preventDefault();

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const col = Math.floor(x / 50);
      const row = Math.floor(y / 50);
      setClickedCell({ row, col });
    }

    setLoadingButton(id); 

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoadingButton(null);
    }, 1500);
  };

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center h-[75vh] w-screen bg-gradient-to-b from-background via-muted/30 to-background text-foreground space-y-10 overflow-hidden"
    >
      <BackgroundRippleEffect
        rows={20}
        cols={50}
        cellSize={50}
        clickedCell={clickedCell}
        onCellClick={(row, col) => setClickedCell({ row, col })}
      />

      <div className="text-center space-y-2 z-10">
        <p className="text-muted-foreground tracking-wide uppercase text-sm">
          Crafting code with a dash of chaos
        </p>
        <h1 className="text-5xl font-bold tracking-tight rock-salt-regular my-10 text-accent dark:text-white">
          Stephen Paul
        </h1>
        <p className="text-muted-foreground text-base">
          Let's connect and build something cool together.
        </p>
      </div>

      <div className="flex gap-8 z-10">
        {/* Mail Button */}
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 hover:scale-110 transition-transform duration-200 dark:hover:text-red-500"
          onClick={(e) =>
            handleButtonClick(e, "mailto:stephenpaul4040@gmail.com", "mail")
          }
          disabled={loadingButton === "mail"}
        >
          {loadingButton === "mail" ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Mail className="h-6 w-6" />
          )}
        </Button>

        {/* GitHub Button */}
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 hover:scale-110 transition-transform duration-200 dark:hover:text-gray-500"
          onClick={(e) =>
            handleButtonClick(e, "https://github.com/stephenpaul-03", "github")
          }
          disabled={loadingButton === "github"}
        >
          {loadingButton === "github" ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Github className="h-6 w-6" />
          )}
        </Button>

        {/* LinkedIn Button */}
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 hover:scale-110 transition-transform duration-200 dark:hover:text-blue-500"
          onClick={(e) =>
            handleButtonClick(
              e,
              "https://linkedin.com/in/stephen-paul-i/",
              "linkedin"
            )
          }
          disabled={loadingButton === "linkedin"}
        >
          {loadingButton === "linkedin" ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Linkedin className="h-6 w-6" />
          )}
        </Button>
      </div>

      <div className="w-[35vw]">
        <Separator className="bg-muted/50" />
      </div>

      <div className="flex items-center gap-2 text-muted-foreground text-xs tracking-wide z-10  ">
        <p>
          &copy; {new Date().getFullYear()} Stephen Paul - All rights reserved.
        </p>
        <span
          onClick={() => setOpen(true)}
          className="underline cursor-pointer hover:text-foreground transition-colors"
        >
          Credits
        </span>
      </div>

      {/* Credits Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Special Thanks To</DialogTitle>
            <DialogDescription asChild>
              <ul className="list-disc pl-5 space-y-2 text-sm text-left mt-3">
                <li>That one guy who made the Favicon</li>
                <li>
                  My Buddies who gave me a thumpsup regardless of how the site
                  looks
                </li>
                <li>All the techstack that I use</li>
                <li>oh and Coffee.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
