import { useEffect, useLayoutEffect, useRef, useState } from "react";
import About from "@/components/about";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Hobbies from "@/components/hobbies";
import Academics from "@/components/academics";

const panels = [
  { title: "Lore Lite", content: <About />, color: "bg-purple-500" },
  {
    title: "Stuff I know (somehow)",
    content: <Skills />,
    color: "bg-indigo-500",
  },
  {
    title: "Where I Got Smarter (kinda)",
    content: <Academics />,
    color: "bg-fuchsia-500",
  },
  { title: "Milestones", content: <Achievements />, color: "bg-blue-500" },
  { title: "Side Quests", content: <Hobbies />, color: "bg-cyan-500" },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [mountedIndex, setMountedIndex] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [heights, setHeights] = useState<Record<number, number>>({});
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const roRefs = useRef<Array<ResizeObserver | null>>([]);

  const EXPAND_DURATION = 500; // ms for height animation
  const FADE_DURATION = 1000; // ms for opacity fade

  const togglePanel = (index: number) => {
    if (index === activeIndex) {
      // If same panel is clicked, open the next one cyclically
      const nextIndex = (index + 1) % panels.length;
      setFadeIn(false);
      setActiveIndex(nextIndex);
    } else {
      // Normal behavior: open clicked panel
      setFadeIn(false);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      const mountTimer = setTimeout(() => {
        setMountedIndex(activeIndex);
        setTimeout(() => setFadeIn(true), 50);
      }, EXPAND_DURATION);
      return () => clearTimeout(mountTimer);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === 0) {
      const initTimer = setTimeout(() => {
        setMountedIndex(0);
        setTimeout(() => setFadeIn(true), 50);
      }, EXPAND_DURATION);
      return () => clearTimeout(initTimer);
    }
  }, []);

  useLayoutEffect(() => {
    if (mountedIndex !== null) {
      const idx = mountedIndex;
      const el = contentRefs.current[idx];

      if (el) {
        const measured = el.scrollHeight;
        setHeights((prev) => ({ ...prev, [idx]: measured }));
      }

      if (roRefs.current[idx]) {
        roRefs.current[idx]?.disconnect();
        roRefs.current[idx] = null;
      }

      const ro = new ResizeObserver(() => {
        const elNow = contentRefs.current[idx];
        if (elNow) {
          const newH = elNow.scrollHeight;
          setHeights((prev) => {
            if (prev[idx] === newH) return prev;
            return { ...prev, [idx]: newH };
          });
        }
      });
      if (el) ro.observe(el);
      roRefs.current[idx] = ro;

      return () => {
        roRefs.current[idx]?.disconnect();
        roRefs.current[idx] = null;
      };
    }
    return;
  }, [mountedIndex]);

  useEffect(() => {
    const onResize = () => {
      const newHeights: Record<number, number> = { ...heights };
      contentRefs.current.forEach((el, i) => {
        if (el) newHeights[i] = el.scrollHeight;
      });
      setHeights(newHeights);
    };
    const debounced = () => {
      clearTimeout((onResize as any)._t);
      (onResize as any)._t = setTimeout(onResize, 100);
    };
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, [heights]);

  return (
    <div className="flex flex-col md:flex-row w-screen md:h-[80vh] overflow-hidden">
      {panels.map((panel, index) => {
        const isActive = activeIndex === index;
        const isMounted = mountedIndex === index;
        const measuredPx = heights[index]
          ? `${heights[index]}px`
          : `${Math.round(
              (typeof window !== "undefined" ? window.innerHeight : 800) * 0.7
            )}px`;
        const targetHeight = isActive ? measuredPx : "0px";

        return (
          <div
            key={index}
            className={`
              flex flex-col md:flex-row transition-all duration-500 ease-in-out
              ${isActive ? "md:flex-1 flex-1" : "md:w-24 flex-none"}
            `}
          >
            <div
              onClick={() => togglePanel(index)}
              className={`
                ${panel.color} text-white font-bold cursor-pointer
                flex items-center justify-center
                shadow-lg hover:shadow-xl
                transition-all duration-500 ease-in-out flex-shrink-0
                ${
                  isActive ? "md:w-80 md:h-full h-20" : "md:w-24 md:h-full h-16"
                }
              `}
            >
              <span
                className={`
                  ${isActive ? "text-2xl" : "text-lg md:rotate-90"}
                  whitespace-nowrap px-4
                  transition-all duration-500 ease-in-out
                `}
              >
                {panel.title}
              </span>
            </div>

            <div
              style={{
                height: targetHeight,
                transition: `height ${EXPAND_DURATION}ms ease-in-out, opacity ${FADE_DURATION}ms ease-in-out`,
                overflow: "hidden",
              }}
              className={`md:transition-all duration-500 ease-in-out ${
                isActive ? "md:flex-1 md:max-h-screen" : "md:w-0"
              }`}
            >
              {isMounted && (
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`w-full box-border transition-opacity duration-500 ease-in-out ${
                    fadeIn ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {panel.content}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
