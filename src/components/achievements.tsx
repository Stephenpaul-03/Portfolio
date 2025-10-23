"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function Achievements() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <section className="flex h-full md:min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4 overflow-auto">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4 overflow-auto">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer gap-4"
          >
            <div className="flex gap-4 items-center w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-20 w-20 sm:h-24 sm:w-24 md:h-14 md:w-14 rounded-lg object-cover object-center flex-shrink-0"
                />
              </motion.div>

              <div className="flex-1">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-left text-sm sm:text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left text-xs sm:text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black whitespace-nowrap"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "1st Place – AI Innovation Challenge",
    title: "Google Developer Student Clubs Hackathon",
    src: "https://assets.aceternity.com/demos/ai-lab.jpeg",
    ctaText: "View",
    ctaLink: "https://developers.google.com/community/dsc",
    content: () => (
      <p>
        Developed an AI-driven waste sorting system that achieved 92% accuracy
        in real-time classification using TensorFlow and React. Recognized for
        innovation and scalability.
      </p>
    ),
  },
  {
    description: "Runner-Up – Sustainability Track",
    title: "Smart India Hackathon 2024",
    src: "https://assets.aceternity.com/demos/green-tech.jpeg",
    ctaText: "Details",
    ctaLink: "https://sih.gov.in/",
    content: () => (
      <p>
        Designed an IoT-based smart irrigation controller that reduced water
        consumption by 38%. Built with ESP32, Node.js backend, and a React
        dashboard. Presented to government officials.
      </p>
    ),
  },
  {
    description: "Professional Cloud Architect Certification",
    title: "Coursera – Google Cloud",
    src: "https://assets.aceternity.com/demos/cloud-cert.jpeg",
    ctaText: "Certificate",
    ctaLink: "https://coursera.org/",
    content: () => (
      <p>
        Completed the Google Cloud Architect program covering compute, storage,
        and networking fundamentals. Deployed a production-grade multi-tier app
        on GCP with load balancing and CI/CD pipelines.
      </p>
    ),
  },
  {
    description: "Best Research Paper Award 2023",
    title: "IEEE Student Branch",
    src: "https://assets.aceternity.com/demos/research-paper.jpeg",
    ctaText: "Read Paper",
    ctaLink: "https://ieeexplore.ieee.org/",
    content: () => (
      <p>
        Published a paper on hybrid reinforcement learning for adaptive traffic
        systems. Presented at IEEE TechSym 2023 and received the “Best Paper”
        award for innovation in AI-based traffic management solutions.
      </p>
    ),
  },
  {
    description: "Community Excellence Award",
    title: "Microsoft Learn Student Ambassadors",
    src: "https://assets.aceternity.com/demos/community.jpeg",
    ctaText: "Explore",
    ctaLink: "https://studentambassadors.microsoft.com/",
    content: () => (
      <p>
        Organized 10+ tech sessions on Azure, GitHub, and DevOps pipelines,
        mentoring 300+ students. Recognized for fostering peer-to-peer learning
        and collaboration.
      </p>
    ),
  },
];
