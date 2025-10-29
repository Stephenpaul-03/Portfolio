// ========================== ICON IMPORTS ==========================
import {
  Code2,
  Database,
  Terminal,
  Cog,
  Wrench,
  Cloud,
  Palette,
  Monitor,
  Globe,
} from "lucide-react";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiShadcnui,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

// =================================== About Me Page ================================

// ===== Skills Panel ===== //
export const logos = [
  { name: "Python", id: 1, img: SiPython },
  { name: "Java", id: 2, img: FaJava },
  { name: "JavaScript", id: 3, img: SiJavascript },
  { name: "TypeScript", id: 4, img: SiTypescript },
  { name: "C", id: 5, img: SiC },
  { name: "HTML", id: 6, img: SiHtml5 },
  { name: "CSS", id: 7, img: SiCss3 },
  { name: "React", id: 8, img: SiReact },
  { name: "Node", id: 9, img: SiNodedotjs },
  { name: "Tailwind CSS", id: 10, img: SiTailwindcss },
  { name: "Shadcn", id: 11, img: SiShadcnui },
  { name: "PostgreSQL", id: 12, img: SiPostgresql },
  { name: "MongoDB", id: 13, img: SiMongodb },
  { name: "AWS", id: 14, img: SiAmazon },
  { name: "Git", id: 15, img: SiGit },
  { name: "GitHub", id: 16, img: SiGithub },
  { name: "Figma", id: 17, img: SiFigma },
  { name: "Adobe XD", id: 18, img: SiAdobexd },
  { name: "Linux", id: 19, img: SiLinux },
];

// ===== Development Tree ===== //
export const developmentTreeData = {
  element: "Development",
  value: "1",
  icon: Code2,
  children: [
    {
      element: "Front End",
      value: "2",
      icon: Globe,
      children: [
        {
          element: "Programming Languages",
          value: "3",
          icon: Terminal,
          children: [
            { value: "4", name: "HTML", icon: SiHtml5 },
            { value: "5", name: "CSS", icon: SiCss3 },
            { value: "6", name: "JavaScript", icon: SiJavascript },
            { value: "7", name: "TypeScript", icon: SiTypescript },
          ],
        },
        {
          element: "Libraries & Frameworks",
          value: "8",
          icon: Wrench,
          children: [
            { value: "9", name: "React", icon: SiReact },
            { value: "10", name: "Tailwind CSS", icon: SiTailwindcss },
            { value: "11", name: "Shadcn", icon: SiShadcnui },
          ],
        },
      ],
    },
    {
      element: "Back End",
      value: "12",
      icon: Terminal,
      children: [
        {
          element: "Programming Languages",
          value: "13",
          icon: Terminal,
          children: [
            { value: "14", name: "Node.js", icon: SiNodedotjs },
            { value: "15", name: "Python", icon: SiPython },
            { value: "16", name: "Java", icon: FaJava },
            { value: "17", name: "C", icon: SiC },
          ],
        },
      ],
    },
    {
      element: "Database & Infrastructure",
      value: "18",
      icon: Database,
      children: [
        { value: "19", name: "PostgreSQL", icon: SiPostgresql },
        { value: "20", name: "MongoDB", icon: SiMongodb },
        { value: "21", name: "AWS", icon: SiAmazon },
      ],
    },
  ],
};

// ===== Tools Tree ===== //
export const toolsTreeData = {
  element: "Tools",
  value: "30",
  icon: Cog,
  children: [
    {
      element: "Design Tools",
      value: "31",
      icon: Palette,
      children: [
        { value: "32", name: "Figma", icon: SiFigma },
        { value: "33", name: "Adobe XD", icon: SiAdobexd },
      ],
    },
    {
      element: "Dev Tools",
      value: "34",
      icon: Wrench,
      children: [
        { value: "35", name: "Git", icon: SiGit },
        { value: "36", name: "GitHub", icon: SiGithub },
        { value: "37", name: "Linux CLI", icon: SiLinux },
      ],
    },
    {
      element: "Deployment & Infra",
      value: "38",
      icon: Cloud,
      children: [
        { value: "39", name: "AWS", icon: SiAmazon },
      ],
    },
  ],
};


// ====== Academics Panel =======

export const academics = [
  {
    id: 1,
    date: "2018 - 2019",
    title: "Placeholder High School",
    score: "80%",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid vel distinctio dolorem magni illum.",
  },
  {
    id: 2,
    date: "2020 - 2021",
    title: "Placeholder Senior Secondary School",
    score: "85%",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores at minima odit cupiditate fugiat.",
  },
  {
    id: 3,
    date: "2022 - 2026",
    score: "8.5 CGPA",
    title: "Placeholder Institute of Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam tempora, ad architecto distinctio omnis.",
  },
  {
    id: 4,
    date: "2026 - 20XX",
    title: "Placeholder Dream Job",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi beatae hic dolore iste tenetur.",
  },
];

// ====== Achievements Panel =======

export const achievements = [
  {
    title: "Achievement One",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+1",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
  {
    title: "Achievement Two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+2",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
  {
    title: "Achievement Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+3",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
  {
    title: "Achievement Four",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+4",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
  {
    title: "Achievement Five",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+5",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
  {
    title: "Achievement Six",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+6",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
  {
    title: "Achievement Seven",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+7",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
  {
    title: "Achievement Eight",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "https://placehold.co/800x600?text=Achievement+8",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  },
];

// ===== Hobbies Panel ======

export const hobbies = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minima suscipit libero excepturi.",
    name: "Hobby One",
    designation: "Funny Tagline",
    src: "https://placehold.co/400x400?text=Hobby+1",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, alias sed error voluptatem.",
    name: "Hobby Two",
    designation: "Funny Tagline",
    src: "https://placehold.co/400x400?text=Hobby+2",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi quibusdam minus mollitia.",
    name: "Hobby Three",
    designation: "Funny Tagline",
    src: "https://placehold.co/400x400?text=Hobby+3",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat odit qui eos.",
    name: "Hobby Four",
    designation: "Funny Tagline",
    src: "https://placehold.co/400x400?text=Hobby+4",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error illum suscipit ad.",
    name: "Hobby Five",
    designation: "Funny Tagline",
    src: "https://placehold.co/400x400?text=Hobby+5",
  },
];

// ============================= Projects =======================================

export const projects = [
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nemo.",
    images: [
      "https://placehold.co/800x1000?text=Project+1+Image+1",
      "https://placehold.co/800x1000?text=Project+1+Image+2",
      "https://placehold.co/800x1000?text=Project+1+Image+3",
    ],
    ctaText: "Learn More",
    ctaLink: "#",
    tech: ["Placeholder Tech 1", "Placeholder Tech 2", "Placeholder Tech 3"],
    content: () => (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    ),
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, velit.",
    images: [
      "https://placehold.co/800x1000?text=Project+2+Image+1",
      "https://placehold.co/800x1000?text=Project+2+Image+2",
      "https://placehold.co/800x1000?text=Project+2+Image+3",
    ],
    ctaText: "Learn More",
    ctaLink: "#",
    tech: ["Placeholder Tech 1", "Placeholder Tech 2", "Placeholder Tech 3"],
    content: () => (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    ),
  },
  {
    title: "Project Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, corporis.",
    images: [
      "https://placehold.co/800x1000?text=Project+3+Image+1",
      "https://placehold.co/800x1000?text=Project+3+Image+2",
      "https://placehold.co/800x1000?text=Project+3+Image+3",
    ],
    ctaText: "Learn More",
    ctaLink: "#",
    tech: ["Placeholder Tech 1", "Placeholder Tech 2", "Placeholder Tech 3"],
    content: () => (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    ),
  },
  {
    title: "Project Four",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam.",
    images: [
      "https://placehold.co/800x1000?text=Project+4+Image+1",
      "https://placehold.co/800x1000?text=Project+4+Image+2",
      "https://placehold.co/800x1000?text=Project+4+Image+3",
    ],
    ctaText: "Learn More",
    ctaLink: "#",
    tech: ["Placeholder Tech 1", "Placeholder Tech 2", "Placeholder Tech 3"],
    content: () => (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    ),
  },
];
