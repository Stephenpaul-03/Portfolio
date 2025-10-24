import { Animated_Carousel } from "./ui/animated-carousel";
import { hobbies } from "@/data";

export default function Hobbies() {
  return (
    <main className="flex h-[70vh] md:min-h-screen w-full flex-col items-center justify-start p-5">
      {/* Description Section */}
      <div className="text-left md:text-justify max-w-xl text-md space-y-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          et provident accusamus voluptas ipsa libero ea. Sapiente quae,
          excepturi optio, eos modi voluptas ullam porro quod commodi aut
          repellendus dolorem.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          et provident accusamus voluptas ipsa libero ea. Sapiente quae,
          excepturi optio, eos modi voluptas ullam porro quod commodi aut
          repellendus dolorem.
        </p>
      </div>

      {/* Flexible Section */}
      <div className="flex-1 w-full">
        <Animated_Carousel testimonials={hobbies}/>
      </div>
    </main>
  );
}

