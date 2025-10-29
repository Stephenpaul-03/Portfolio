import { useEffect, useLayoutEffect, useRef, useState } from "react";
import About from "@/components/about";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Hobbies from "@/components/hobbies";
import Academics from "@/components/academics";

import img1 from "@/assets/Panels/img1.jpeg";
import img2 from "@/assets/Panels/img2.jpeg";
import img3 from "@/assets/Panels/img3.jpeg";
import img4 from "@/assets/Panels/img4.jpeg";
import img5 from "@/assets/Panels/img5.jpeg";

const panels = [
  { title: "Who I Am", content: <About />, color: "bg-primary", panel: img1 },
  {
    title: "What I Do Best",
    content: <Skills />,
    color: "bg-primary",
    panel: img2,
  },
  {
    title: "My Journey So Far",
    content: <Academics />,
    color: "bg-primary",
    panel: img3,
  },
  {
    title: "Milestones & Highlights",
    content: <Achievements />,
    color: "bg-primary",
    panel: img4,
  },
  {
    title: "Life Outside the Grind",
    content: <Hobbies />,
    color: "bg-primary",
    panel: img5,
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [mountedIndex, setMountedIndex] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [heights, setHeights] = useState<Record<number, number>>({});
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const roRefs = useRef<Array<ResizeObserver | null>>([]);

  const EXPAND_DURATION = 500; // ms
  const FADE_DURATION = 1000; // ms

  const togglePanel = (index: number) => {
    if (index === activeIndex) {
      const nextIndex = (index + 1) % panels.length;
      setFadeIn(false);
      setActiveIndex(nextIndex);
    } else {
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
            {/* Panel Bar */}
            <div
              onClick={() => togglePanel(index)}
              className={`
                relative cursor-pointer flex-shrink-0 shadow-lg hover:shadow-xl
                transition-all duration-700 ease-in-out overflow-hidden
                ${
                  isActive ? "md:w-80 md:h-full h-20" : "md:w-24 md:h-full h-16"
                }
              `}
            >
              {/* Background Image Fade */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${panel.panel})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  isActive ? "bg-black/40" : "bg-primary"
                } transition-all duration-700 ease-in-out`}
              />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span
                  className={`
                    absolute text-white font-bold rock-salt-regular px-3 py-1 rounded
                    transition-all duration-700 ease-in-out
                    ${
                      isActive
                        ? "text-sm md:text-base bottom-2 right-3 md:bottom-4 md:right-4 rotate-0"
                        : "text-lg md:text-xl md:rotate-90 md:whitespace-nowrap"
                    }
                  `}
                  style={{
                    transformOrigin: isActive ? "bottom right" : "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {panel.title}
                </span>
              </div>
            </div>

            {/* Expanding Content */}
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
