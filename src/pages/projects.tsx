"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {projects} from "@/data"

export const Projects: React.FC = () => {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center pt-16 overflow-y-auto">
      <h1 className="text-4xl font-bold mb-5 text-center">Projects Showcase</h1>
      <p className="px-10 md:px-20 mb-10 text-md text-gray-300 text-center">
        A gallery of dummy projects for UI testing and design layout purposes.
      </p>

      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={ref}
              className="w-[95vw] max-w-[1100px] h-[85vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-50 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition"
              >
                <X size={20} />
              </button>

              {/* Info */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between overflow-y-auto md:h-full h-[55%]">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {active.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {active.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {active.tech.map((stack) => (
                      <span
                        key={stack}
                        className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="text-neutral-700 dark:text-neutral-300 text-sm mb-6">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={active.ctaLink}
                    target="_blank"
                    className="inline-block px-5 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                  >
                    {active.ctaText}
                  </a>
                </div>
              </div>

              {/* Carousel */}
              <div className="md:w-1/2 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center md:h-full h-[45%] relative">
                <Carousel
                  opts={{ loop: true }}
                  plugins={[Autoplay({ delay: 3000 })]}
                  className="w-full h-full"
                >
                  <CarouselContent>
                    {active.images.map((img, i) => (
                      <CarouselItem key={i} className="flex items-center justify-center">
                        <img
                          src={img}
                          alt={`${active.title}-${i}`}
                          className="object-cover w-full h-full"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60" />
                </Carousel>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between justify-center w-[90vw] gap-6 pb-10">
        {projects.map((project) => (
          <motion.div
            key={`card-${project.title}-${id}`}
            onClick={() => setActive(project)}
            className="cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden md:h-[70vh] h-[35vh] md:w-[20vw] relative shadow-lg group"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
