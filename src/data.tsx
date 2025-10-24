import {
  Circle,
  Square,
  Triangle,
  Star,
  Hexagon,
  Play,
  Music,
  Gamepad,
  Camera,
  Monitor,
  Mail,
  Heart,
} from "lucide-react";

// =================================== About Me Page ================================

// ===== Skills Panel ===== //

export const logos = [
  { name: "Circle", id: 1, img: Circle },
  { name: "Square", id: 2, img: Square },
  { name: "Triangle", id: 3, img: Triangle },
  { name: "Star", id: 4, img: Star },
  { name: "Hexagon", id: 5, img: Hexagon },
  { name: "Play", id: 6, img: Play },
  { name: "Music", id: 7, img: Music },
  { name: "Gamepad", id: 8, img: Gamepad },
  { name: "Camera", id: 9, img: Camera },
  { name: "Monitor", id: 10, img: Monitor },
  { name: "Mail", id: 11, img: Mail },
  { name: "Heart", id: 12, img: Heart },
];

// ===== Development Tree ===== //

export const developmentTreeData = {
  element: "Development",
  value: "1",
  children: [
    {
      element: "Front End",
      value: "2",
      children: [
        {
          element: "Programming Languages",
          value: "3",
          children: [
            { value: "4", name: "HTML" },
            { value: "5", name: "CSS" },
            { value: "6", name: "JavaScript" },
            { value: "7", name: "TypeScript" },
          ],
        },
        {
          element: "Libraries & Frameworks",
          value: "8",
          children: [
            { value: "9", name: "React" },
            { value: "10", name: "Next.js" },
            { value: "11", name: "Tailwind CSS" },
            { value: "12", name: "Redux" },
          ],
        },
      ],
    },
    {
      element: "Back End",
      value: "13",
      children: [
        {
          element: "Programming Languages",
          value: "14",
          children: [
            { value: "15", name: "Node.js" },
            { value: "16", name: "Python" },
            { value: "17", name: "Java" },
          ],
        },
        {
          element: "Libraries & Frameworks",
          value: "18",
          children: [
            { value: "19", name: "Express.js" },
            { value: "20", name: "FastAPI" },
            { value: "21", name: "Spring Boot" },
          ],
        },
      ],
    },
    {
      element: "Database",
      value: "22",
      children: [
        { value: "23", name: "PostgreSQL" },
        { value: "24", name: "MongoDB" },
        { value: "25", name: "MySQL" },
        { value: "26", name: "Firebase" },
      ],
    },
  ],
};

// ===== Tools Tree ===== //

export const toolsTreeData = {
  element: "Tools",
  value: "30",
  children: [
    {
      element: "Design Tools",
      value: "31",
      children: [
        { value: "32", name: "Figma" },
        { value: "33", name: "Adobe XD" },
        { value: "34", name: "Canva" },
      ],
    },
    {
      element: "DevOps",
      value: "35",
      children: [
        { value: "36", name: "Docker" },
        { value: "37", name: "GitHub Actions" },
        { value: "38", name: "Vercel" },
        { value: "39", name: "Netlify" },
        { value: "40", name: "AWS" },
      ],
    },
    {
      element: "IDE's",
      value: "41",
      children: [
        { value: "42", name: "VS Code" },
        { value: "43", name: "IntelliJ IDEA" },
        { value: "44", name: "PyCharm" },
        { value: "45", name: "WebStorm" },
      ],
    },
    {
      element: "Utilities",
      value: "46",
      children: [
        { value: "47", name: "Postman" },
        { value: "48", name: "Git" },
        { value: "49", name: "npm / pnpm" },
        { value: "50", name: "ESLint / Prettier" },
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
