import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/img.png";
import { AnimatedThemeToggler } from "@/components/theme/animated-theme-toggler";
import { TextAnimate } from "@/components/ui/text-animate";
import { Highlighter } from "@/components/ui/highlighter";

export default function Hero() {
  const desktopDescriptions = [
    "I design and develop digital experiences that feel smooth, look clean, and occasionally make users wonder how I pulled it off",
    "I am still figuring out if I’m a developer, designer, or digital chaos coordinator; but hey, at least the projects keep getting cooler",
    "Somewhere between coding, designing, and overthinking; building things that sometimes crash but always teach me something new",
    "Part-time developer, part-time designer, full-time creative mess trying to make cool stuff on the web and beyond.",
    "I tinker, build, sketch, and code; learning how to turn ideas into things that actually work (most of the time)",
    "I’m not just coding websites; I’m figuring out how to make things that matter, even if it means trying everything once.",
  ];

  const mobileDescriptions = [
    "I Build websites that slap. metaphorically, not literally",
    "I break things until they work. That’s called development, right?",
    "Im always one line of code away from brilliance… or disaster.",
    "Jack of many trades, master of fun ones.",
    "I build, break, and rebuild things until they make sense.",
    "A work in progress, but so are all great projects.",
    "Making ideas happen, one messy project at a time.",
    "Trying everything once. except giving up.",
  ];

  const [desktopText] = useState(
    () =>
      desktopDescriptions[
        Math.floor(Math.random() * desktopDescriptions.length)
      ]
  );
  const [mobileText] = useState(
    () =>
      mobileDescriptions[Math.floor(Math.random() * mobileDescriptions.length)]
  );

  // Scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* LEFT SECTION - DESKTOP */}
      <div className="hidden md:flex flex-col p-10 w-[90%] z-10">
        <div className="flex flex-col gap-6 items-baseline justify-center flex-1">
          {/* Green Bar Fade-In */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hidden md:block absolute top-0 left-6/8 -translate-x-1/2 w-[30%] h-full bg-[#4f735c] z-0"
          />

          {/* Text */}
          <TextAnimate
            animation="blurIn"
            by="word"
            duration={1}
            startOnView
            once
            className="text-4xl font-bold rock-salt-regular"
          >
            Hey! I am
          </TextAnimate>

          <Highlighter action="highlight" color="#8ab57a" delay={2000} iterations={4} animationDuration={4000} isView>
            <TextAnimate
              animation="blurIn"
              by="character"
              duration={1}
              startOnView
              once
              delay={1}
              className="text-6xl font-bold rock-salt-regular text-primary dark:text-white"
            >
              Stephen Paul
            </TextAnimate>
          </Highlighter>

          {/* Portrait Fade-In */}
          <motion.img
            src={portrait}
            alt="Stephen Paul"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="hidden md:block absolute bottom-0 left-6/8 -translate-x-1/2 h-[90%] w-[40%] object-cover z-20 dark:drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] drop-shadow-[0_0_40px_rgba(0,0,0,0.15)]"
          />

          {/* Fixed text wrapping */}
          <TextAnimate
            animation="blurIn"
            by="word"
            duration={2}
            startOnView
            once
            delay={2.5}
            className="mt-5 text-2xl max-w-3xl text-left whitespace-normal break-normal leading-relaxed"
          >
            {desktopText}
          </TextAnimate>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 4.8,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* RIGHT ICONS - DESKTOP */}
      <motion.div
        className="hidden md:flex flex-col items-center justify-start pt-10 gap-4 w-[10%] z-100"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 4.8,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-red-500 hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-700 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-blue-500 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <AnimatedThemeToggler />
        </motion.div>
      </motion.div>

      {/* MOBILE VIEW */}
      <div className="flex md:hidden flex-col items-center justify-start relative w-full h-full p-6 overflow-clip">
        {/* Top Right Icons */}
        <motion.div
          className="absolute top-4 right-4 flex gap-3 z-100"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 4.8,
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-red-500"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400"
            >
              <Github className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button variant="ghost" size="icon" className="text-blue-500">
              <Linkedin className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <AnimatedThemeToggler />
          </motion.div>
        </motion.div>

        {/* Name and Description */}
        <div className="flex flex-col items-center text-center mt-20 gap-4 z-20">
          <TextAnimate
            animation="blurIn"
            by="character"
            duration={1}
            startOnView
            once
            className="text-2xl font-bold rock-salt-regular"
          >
            Hey! I am
          </TextAnimate>

          <TextAnimate
            animation="blurIn"
            by="character"
            duration={1}
            startOnView
            once
            delay={1}
            className="text-4xl font-bold rock-salt-regular"
          >
            Stephen Paul
          </TextAnimate>

          {/* Portrait Fade-In */}
          <motion.img
            src={portrait}
            alt="Stephen Paul"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[60%] w-auto object-cover z-20 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          />

          {/* Mobile text animation fix */}
          <TextAnimate
            animation="blurIn"
            by="word"
            duration={2}
            startOnView
            once
            delay={2.5}
            className="mt-5 text-2xl max-w-2xl text-center caveat-brush-regular leading-relaxed whitespace-normal break-words"
          >
            {mobileText}
          </TextAnimate>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 mt-2 z-100"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 4.8, staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Green Bar Fade-In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute bottom-0 w-[120%] h-[40%] rotate-10 translate-y-10 bg-[#4f735c] -z-10"
        />
      </div>
    </div>
  );
}
