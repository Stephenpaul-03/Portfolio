import { Animated_Carousel } from "./ui/animated-carousel";
import { hobbies } from "@/data";

export default function Hobbies() {
  return (
    <main className="flex h-[70vh] md:min-h-screen w-full flex-col items-center justify-start p-5">
      <div className="text-left md:text-justify max-w-xl md:max-w-2xl text-md space-y-4 flex flex-col items-center">
        {/* First paragraph */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          et provident accusamus voluptas ipsa libero ea. Sapiente quae,
          excepturi optio, eos modi voluptas ullam porro quod commodi aut
          repellendus dolorem.
        </p>

        {/* Carousel in between paragraphs */}
        <div className="w-full my-1">
          <Animated_Carousel testimonials={hobbies} />
        </div>

        {/* Second paragraph */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          et provident accusamus voluptas ipsa libero ea. Sapiente quae,
          excepturi optio, eos modi voluptas ullam porro quod commodi aut
          repellendus dolorem.
        </p>
      </div>
    </main>
  );
}
