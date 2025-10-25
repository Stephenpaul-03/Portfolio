"use client";

import LogoCarousel from "./ui/logo-carousel";
import { Tree, Folder, File } from "@/components/ui/file-tree";
import { logos, developmentTreeData,toolsTreeData } from "@/data";

// ===== Recursive Tree Renderer =====
const renderTree = (node: any) => {
  if (node.children) {
    return (
      <Folder key={node.value} element={node.element} value={node.value}>
        {node.children.map((child: any) => renderTree(child))}
      </Folder>
    );
  }
  return (
    <File key={node.value} value={node.value}>
      <p>{node.name}</p>
    </File>
  );
};

export default function Skills() {
  return (
    <section className="flex flex-col h-[115vh] min-h-[80vh] md:min-h-screen w-full items-center justify-start p-5">
      <div className="max-w-6xl w-full h-[130vh] md:h-[75vh] flex flex-col items-center gap-12">
        {/* Description */}
        <p className="text-center max-w-2xl text-sm">
          Here's a showcase of the technologies, tools, and skills I work with
          daily - from frontend and backend development to the tools that keep
          everything flowing smoothly.
        </p>

        {/* Carousel */}
        <div className="w-full flex flex-col items-center gap-6">
          <LogoCarousel columnCount={3} logos={logos} />
        </div>

        {/* Two File Trees Side by Side */}
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8">
          {/* Development Tree */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-background relative flex h-[350px] w-4/5 flex-col items-center justify-center overflow-hidden rounded-lg border">
              <Tree
                className="bg-background overflow-hidden rounded-md p-3"
                initialExpandedItems={[
                  "1",
                  "2",
                  "3",
                  "8",
                  "13",
                  "14",
                  "18",
                  "22",
                ]}
              >
                {renderTree(developmentTreeData)}
              </Tree>
            </div>
          </div>

          {/* Tools Tree */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-background relative flex h-[350px] w-4/5 flex-col items-center justify-center overflow-hidden rounded-lg border">
              <Tree
                className="bg-background overflow-hidden rounded-md p-3"
                initialExpandedItems={["30", "31", "35", "41", "46"]}
              >
                {renderTree(toolsTreeData)}
              </Tree>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
