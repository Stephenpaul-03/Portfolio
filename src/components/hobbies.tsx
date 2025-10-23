"use client";

import { Hover_Carousel } from "@/components/ui/hover-carousel";

export default function Hobbies() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      alt: "Abstract Art 1",
      code: "# 01",
    },
    {
      src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
      alt: "Abstract Art 2",
      code: "# 02",
    },
    {
      src: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
      alt: "Abstract Art 3",
      code: "# 03",
    },
    {
      src: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80",
      alt: "Abstract Art 4",
      code: "# 04",
    },
    {
      src: "https://images.unsplash.com/photo-1618556450783-b2e6890a6a4d?w=800&q=80",
      alt: "Abstract Art 5",
      code: "# 05",
    },
    {
      src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
      alt: "Abstract Art 6",
      code: "# 06",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row h-auto md:min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-auto p-4">
      <div className="w-full flex justify-center items-center h-auto md:h-full">
        <div className="w-full max-w-6xl">
          <Hover_Carousel images={images} />
        </div>
      </div>
    </section>
  );
}
