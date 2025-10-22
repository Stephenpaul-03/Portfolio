import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  "Project Alpha",
  "Project Beta",
  "Project Gamma",
  "Project Delta",
];

export const Projects: React.FC = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center pt-16">
      <h1 className="text-4xl font-bold mb-5 text-center">Projects</h1>
      <p className="px-10 md:px-20 mb-10 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat unde, possimus corrupti architecto corporis, labore totam soluta tempore reprehenderit hic recusandae laborum voluptates et, sequi quaerat dolorum cumque iure?</p>
      <div className="flex flex-wrap md:justify-between justify-center w-[90vw] gap-4">
        {projects.map((project) => (
          <Card
            key={project}
            className={`
              cursor-pointer
              rounded-none
              transition-all duration-300
              md:h-[70vh] md:w-[20vw]  /* Desktop: tall and narrow */
              h-[30vh] w-[40vw]        /* Mobile: short and wide */
            `}
          >
            <CardContent>
              <p className="text-lg font-medium text-gray-800 transition-all duration-300 hover:text-2xl">
                {project}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
