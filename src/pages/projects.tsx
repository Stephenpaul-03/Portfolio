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
import { projects } from "@/data";

export const Projects: React.FC = () => {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-16 overflow-y-auto">
      <h1 className="text-4xl font-bold mb-5 text-center rock-salt-regular leading-relaxed text-primary">Projects Showcase</h1>
      <p className="px-10 md:px-20 mb-10 text-sm md:text-md text-center text-muted-foreground">
        A gallery of dummy projects for UI testing and design layout purposes.
      </p>

      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-10"
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
              className="w-[95vw] max-w-[1100px] h-[85vh] bg-background rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-50 bg-foreground/20 hover:bg-foreground/30 text-foreground rounded-full p-2 transition"
              >
                <X size={20} />
              </button>

              {/* Info */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between overflow-y-auto md:h-full h-[55%]">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
                  <p className="text-muted-foreground mb-4">{active.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {active.tech.map((stack) => (
                      <span
                        key={stack}
                        className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm mb-6 text-muted-foreground">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={active.ctaLink}
                    target="_blank"
                    className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition"
                  >
                    {active.ctaText}
                  </a>
                </div>
              </div>

              {/* Carousel */}
              <div className="md:w-1/2 bg-muted flex items-center justify-center md:h-full h-[45%] relative">
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
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/20 text-foreground hover:bg-foreground/40" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/20 text-foreground hover:bg-foreground/40" />
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
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent p-4 backdrop-blur-sm">
              <h3 className="text-sm md:text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
