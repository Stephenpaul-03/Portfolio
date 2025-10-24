import { Card } from "./ui/card";

export default function About() {
  return (
    <main className="flex h-[70vh] md:min-h-screen w-full flex-col items-center justify-start p-5 ">
      {/* Description Section */}
      <div className="max-w-xl text-left  md:text-justify space-y-4 mb-8">
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
      <div className="flex flex-col gap-y-5 w-full max-w-xl">
        <div className="w-full flex flex-row gap-x-5 h-fit">
          <Card className="w-1/3 aspect-square"></Card>
          <Card className="w-1/3 aspect-square"></Card>
          <Card className="w-1/3 aspect-square"></Card>
        </div>
        <div className="w-full flex flex-row gap-x-5 h-fit">
          <Card className="w-1/3 aspect-square"></Card>
          <Card className="w-1/3 aspect-square"></Card>
          <Card className="w-1/3 aspect-square"></Card>
        </div>
      </div>
    </main>
  );
}
