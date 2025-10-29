import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { academics } from "@/data";

export default function Academics() {
  return (
    <main className="flex h-[95vh] md:min-h-screen w-full flex-col items-center justify-start p-5 ">
      {/* Description Section */}
      <div className="text-center space-y-4 mb-5 max-w-xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          error, aperiam dignissimos ipsam, ipsa blanditiis asperiores doloribus
        </p>
      </div>

      {/* Timeline Section */}
      <div className="flex-1 w-full max-w-xl">
        <div className="w-full max-w-2xl">
          <Timeline defaultValue={3}>
            {academics.map((item) => (
              <TimelineItem key={item.id} step={item.id}>
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineDate className="">{item.date}</TimelineDate>
                  <TimelineTitle className="text-md my-1 text-primary rock-salt-regular space-x-1">{item.title}</TimelineTitle>
                  <TimelineDate>{item.score}</TimelineDate>
                  <TimelineIndicator />
                </TimelineHeader>
                <TimelineContent>
                  {item.description}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </main>
  );
}
