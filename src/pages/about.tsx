import { useState } from "react";
import About from "@/components/about";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Hobbies from "@/components/hobbies";
import Academics from "@/components/academics";

const panels = [
  { title: "About me", content: <About />, color: "bg-purple-500" },
  { title: "Skills", content: <Skills />, color: "bg-indigo-500" },
  { title: "Academics", content: <Academics />, color: "bg-fuchsia-500" },
  { title: "Achievements", content: <Achievements />, color: "bg-blue-500" },
  { title: "Hobbies", content: <Hobbies />, color: "bg-cyan-500" },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const togglePanel = (index: number) => {
    setActiveIndex(index === activeIndex ? (index + 1) % panels.length : index);
  };

  return (
    <div className="flex flex-col md:flex-row w-screen min-h-screen overflow-hidden">
      {panels.map((panel, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`
              flex flex-col md:flex-row transition-all duration-500 ease-in-out
              ${isActive ? "md:flex-1 flex-1" : "md:w-24 flex-none"}
            `}
          >
            {/* Panel Button */}
            <div
              onClick={() => togglePanel(index)}
              className={`
                ${panel.color} text-white font-bold cursor-pointer
                flex items-center justify-center
                shadow-lg hover:shadow-xl
                transition-all duration-500 ease-in-out flex-shrink-0
                ${isActive ? "md:w-80 md:h-full h-20" : "md:w-24 md:h-full h-16"}
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

            {/* Panel Content */}
            <div
              className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isActive ? "md:flex-1 opacity-100 md:max-h-screen" : "opacity-0 max-h-0 md:w-0"}
              `}
            >
              {isActive && <div className="w-full h-full">{panel.content}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
