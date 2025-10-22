import { useState, useEffect } from "react";

const panels = [
  { title: "About me", content: "I'm a passionate developer...", color: "bg-purple-500" },
  { title: "Skills", content: "React, TypeScript, Node.js, Python, UI/UX Design", color: "bg-indigo-500" },
  { title: "Academics", content: "Computer Science degree with honors. GPA: 3.8/4.0", color: "bg-fuchsia-500" },
  { title: "Achievements", content: "AWS Certified, Google Cloud Professional, Hackathon Winner 2024", color: "bg-blue-500" },
  { title: "Hobbies", content: "Photography, Gaming, Hiking, Reading sci-fi novels", color: "bg-cyan-500" },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const togglePanel = (index: number) => {
    if (index === activeIndex) return;
    setShowContent(false); 
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500); 
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {panels.map((panel, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`
              transition-all duration-500 ease-in-out
              ${isActive ? "flex-1 md:flex-row flex-col" : "md:w-24 w-full md:h-full h-20"}
              flex
            `}
          >
            <div
              onClick={() => togglePanel(index)}
              className={`
                ${panel.color} text-white font-bold cursor-pointer
                flex items-center justify-center
                shadow-lg hover:shadow-xl
                transition-all duration-500 ease-in-out
                ${isActive ? "md:w-80 md:h-full w-full h-20 rounded-none" : "md:w-24 md:h-full w-full h-20"}
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
              className={`
                overflow-auto
                transition-all duration-500 ease-in-out
                ${isActive ? "flex-1" : "w-0 h-0"}
              `}
            >
              <div
                className={`
                  transition-opacity duration-500 ease-in-out
                  ${showContent && isActive ? "opacity-100 p-8" : "opacity-0 p-0"}
                `}
              >
                {showContent && isActive && (
                  <>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">{panel.title}</h2>
                    <div className="text-gray-600 text-lg space-y-4">
                      <p>{panel.content}</p>
                      
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
