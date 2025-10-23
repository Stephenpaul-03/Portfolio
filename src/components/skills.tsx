"use client";

import {
  Circle,
  Square,
  Triangle,
  RectangleCircle,
  Diamond,
  PlayIcon,
  Music,
  Gamepad,
  Camera,
  Computer,
  Mailbox,
  Heart,
} from "lucide-react";
import LogoCarousel from "./ui/logo-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const logos = [
  { name: "Apple", id: 1, img: Circle },
  { name: "Vercel", id: 2, img: Square },
  { name: "Supabase", id: 3, img: Triangle },
  { name: "Apple", id: 4, img: RectangleCircle },
  { name: "Vercel", id: 5, img: Diamond },
  { name: "Supabase", id: 6, img: PlayIcon },
  { name: "Apple", id: 7, img: Music },
  { name: "Vercel", id: 8, img: Gamepad },
  { name: "Supabase", id: 9, img: Camera },
  { name: "Apple", id: 10, img: Computer },
  { name: "Vercel", id: 11, img: Mailbox },
  { name: "Supabase", id: 12, img: Heart },
];

const cardData = [
  {
    title: "Frontend Skills",
    points: ["React", "Next.js", "Tailwind CSS", "TypeScript", "ShadCN UI"],
  },
  {
    title: "Backend Skills",
    points: ["Node.js", "Express", "Prisma", "Supabase", "PostgreSQL"],
  },
  {
    title: "Frontend Skills",
    points: ["React", "Next.js", "Tailwind CSS", "TypeScript", "ShadCN UI"],
  },
  {
    title: "Backend Skills",
    points: ["Node.js", "Express", "Prisma", "Supabase", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col h-auto min-h-[80vh] md:min-h-screen w-full items-center justify-start bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-auto p-4">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center">My Skills & Tools</h2>

        {/* Description */}
        <p className="text-center max-w-2xl text-neutral-400 text-sm md:text-base">
          Here's a showcase of the technologies, tools, and skills I work with on
          a daily basis. From frontend to backend, I try to stay on top of the
          latest trends and best practices.
        </p>

        {/* Carousels */}
        <div className="w-full flex flex-col md:flex-col items-center gap-6">
          {/* Mobile: 1 carousel, Desktop: 2 carousels */}
          <LogoCarousel columnCount={3} logos={logos} />
          <div className="hidden md:block">
            <LogoCarousel columnCount={3} logos={logos} />
          </div>
        </div>

        {/* Cards */}
        <div className="w-full flex justify-center">
          <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 w-full max-w-full justify-center">
            {cardData.map((card, idx) => (
              <Card
                key={idx}
                className="flex flex-col flex-1 min-w-[150px] max-w-[300px] md:max-w-[250px]"
              >
                <CardHeader>
                  <CardTitle className="text-center md:text-left">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-200">
                    {card.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
