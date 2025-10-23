import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/img.png";
import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full">
      {/* TOP NAV (for desktop) */}
      <div className="hidden md:flex flex-col p-10 w-[90%] z-10">
        {/* Navigation */}
        <div className="flex gap-6">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contact</Button>
        </div>

        {/* Hero Text */}
        <div className="flex flex-col gap-6 items-baseline justify-center flex-1">
          <h1 className="text-6xl font-bold">Stephen Paul</h1>
          <p className="text-lg max-w-2xl text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet justo nec sapien tincidunt aliquet. Curabitur fringilla,
            felis nec ultrices luctus, urna lorem tincidunt lectus, nec varius
            ligula sapien a justo.
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline">Learn More</Button>
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>

      {/* RIGHT ICONS - DESKTOP */}
      <div className="hidden md:flex flex-col items-center justify-start pt-10 gap-4 w-[10%] z-100">
        <Button variant="ghost" size="icon" className="">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="">
          <Linkedin className="h-5 w-5" />
        </Button>
        <ModeToggle />
      </div>

      {/* GREEN BAR (desktop vertical) */}
      <div className="hidden md:block absolute top-0 left-6/8 -translate-x-1/2 w-[30%] h-full bg-[#97c07c] z-0"></div>

      {/* PORTRAIT (desktop) */}
      <img
        src={portrait}
        alt="Stephen Paul"
        className="hidden md:block absolute bottom-0 left-6/8 -translate-x-1/2 h-[90%] w-[40%] object-cover z-20 dark:drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] drop-shadow-[0_0_40px_rgba(0,0,0,0.15)]"
      />

      {/* MOBILE VIEW */}
      <div className="flex md:hidden flex-col items-center justify-start relative w-full h-full p-6">
        {/* Top Right Icons */}
        <div className="absolute top-4 right-4 flex gap-3">
          <Button variant="ghost" size="icon" className="text-white">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Linkedin className="h-5 w-5" />
          </Button>
          <ModeToggle />
        </div>

        {/* Name and Description */}
        <div className="flex flex-col items-center text-center mt-20 gap-4 z-20">
          <h1 className="text-4xl font-bold">Stephen Paul</h1>
          <p className="text-base text-gray-300 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet justo nec sapien tincidunt aliquet.
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline">Learn More</Button>
            <Button>Hire Me</Button>
          </div>
        </div>

        {/* Green Bar and Portrait */}
        <div className="absolute bottom-0 w-full h-[40%] bg-[#97c07c] z-0"></div>
        <img
          src={portrait}
          alt="Stephen Paul"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[60%] w-auto object-cover z-20 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
}
