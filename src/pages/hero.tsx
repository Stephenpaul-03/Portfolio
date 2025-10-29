import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/img.png";
import { AnimatedThemeToggler } from "@/components/theme/animated-theme-toggler";

export default function Hero() {
  const desktopDescriptions = [
    "I design and develop digital experiences that feel smooth, look clean, and occasionally make users wonder how I pulled it off",
    "I am still figuring out if I’m a developer, designer, or digital chaos coordinator; but hey, at least the projects keep getting cooler",
    "Somewhere between coding, designing, and overthinking; building things that sometimes crash but always teach me something new",
    "Part-time developer, part-time designer, full-time creative mess trying to make cool stuff on the web and beyond.",
    "I tinker, build, sketch, and code; learning how to turn ideas into things that actually work (most of the time)",
    "I’m not just coding websites; I’m figuring out how to make things that matter, even if it means trying everything once."
  ];

  const mobileDescriptions = [
    "I Build websites that slap. metaphorically, not literally",
    "I break things until they work. That’s called development, right?",
    "Im always one line of code away from brilliance… or disaster.",
    "Jack of many trades, master of fun ones.",
    "I build, break, and rebuild things until they make sense.",
    "A work in progress, but so are all great projects.",
    "Making ideas happen, one messy project at a time.",
    "Trying everything once. except giving up."
  ];

  const [desktopText] = useState(() => 
    desktopDescriptions[Math.floor(Math.random() * desktopDescriptions.length)]
  );
  const [mobileText] = useState(() => 
    mobileDescriptions[Math.floor(Math.random() * mobileDescriptions.length)]
  );

  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full">
      <div className="hidden md:flex flex-col p-10 w-[90%] z-10">
        {/* Hero Text */}
        <div className="flex flex-col gap-6 items-baseline justify-center flex-1">
          <h1 className="text-4xl font-bold rock-salt-regular">Hey! I am</h1>
          <h1 className="text-6xl font-bold rock-salt-regular text-primary dark:text-white">
            Stephen Paul
          </h1>
          <p className=" mt-5 text-2xl max-w-2xl text-left ">{desktopText}</p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline">Learn More</Button>
            <Button>Contact Me</Button>
          </div>
        </div>
      </div>

      {/* RIGHT ICONS - DESKTOP */}
      <div className="hidden md:flex flex-col items-center justify-start pt-10 gap-4 w-[10%] z-100">
        <Button variant="ghost" size="icon" className="rounded-full text-red-500 hover:text-white">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full text-gray-700 hover:text-white">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full text-blue-500 hover:text-white">
          <Linkedin className="h-5 w-5" />
        </Button>
        <AnimatedThemeToggler />
      </div>

      {/* GREEN BAR (desktop vertical) */}
      <div className="hidden md:block absolute top-0 left-6/8 -translate-x-1/2 w-[30%] h-full bg-[#4f735c] z-0"></div>

      {/* PORTRAIT (desktop) */}
      <img
        src={portrait}
        alt="Stephen Paul"
        className="hidden md:block absolute bottom-0 left-6/8 -translate-x-1/2 h-[90%] w-[40%] object-cover z-20 dark:drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] drop-shadow-[0_0_40px_rgba(0,0,0,0.15)]"
      />

      {/* MOBILE VIEW */}
      <div className="flex md:hidden flex-col items-center justify-start relative w-full h-full p-6 overflow-clip">
        {/* Top Right Icons */}
        <div className="absolute top-4 right-4 flex gap-3 z-100">
          <Button variant="ghost" size="icon" className="rounded-full text-red-500">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-gray-400">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-blue-500">
            <Linkedin className="h-5 w-5" />
          </Button>
          <AnimatedThemeToggler />
        </div>

        {/* Name and Description */}
        <div className="flex flex-col items-center text-center mt-20 gap-4 z-20">
          <h1 className="text-2xl font-bold rock-salt-regular"> Hey!  I am</h1>
          <h1 className="text-4xl font-bold rock-salt-regular">Stephen Paul</h1>
          <p className=" mt-5 text-2xl max-w-2xl text-center  caveat-brush-regular">{mobileText}</p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline">Learn More</Button>
            <Button>Contact Me</Button>
          </div>
        </div>

        {/* Green Bar and Portrait */}
        <div className="absolute bottom-0 w-[120%] h-[40%] rotate-10 translate-y-10 bg-[#4f735c] -z-10"></div>
        <img
          src={portrait}
          alt="Stephen Paul"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[60%] w-auto object-cover z-20 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
}