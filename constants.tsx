import React from 'react';
import type { Skill, Project, ExperienceItem, BlogPost, GalleryImage, EducationItem, OnlineCourseItem } from './types';
import { 
    HtmlIcon, CssIcon, SassIcon, BootstrapIcon, TailwindCssIcon, JavascriptIcon, JqueryIcon, ReactIcon, NextjsIcon,
    WordpressIcon, ElementorIcon, WoocommerceIcon, PhpIcon, GitIcon, GithubIcon
} from './components/icons';

export const SKILLS: { [key: string]: Skill[] } = {
  "Web Design": [
    { name: "HTML5", icon: HtmlIcon },
    { name: "CSS3", icon: CssIcon },
    { name: "SASS/SCSS", icon: SassIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
  ],
  "Modern Frontend": [
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "jQuery", icon: JqueryIcon },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "Tailwind CSS", icon: TailwindCssIcon },
  ],
  "CMS & Backend": [
    { name: "WordPress", icon: WordpressIcon },
    { name: "Elementor", icon: ElementorIcon },
    { name: "WooCommerce", icon: WoocommerceIcon },
    { name: "PHP", icon: PhpIcon },
  ],
  "Tools & Workflow": [
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubIcon },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Japanese Client Projects (NEXUS)",
    description: "Elementor-based WordPress development and customization for Japanese clients.",
    longDescription: "Focused on building and customizing WordPress themes and developing custom Elementor widgets with dynamic controls. Created responsive HTML templates following ThemeForest standards and maintained WordPress plugins tailored to specific project needs. Also responsible for fixing advanced Elementor bugs and layout issues with clean, optimized code.",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    tags: ["WordPress", "Elementor", "PHP", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Freelance Web Development",
    description: "Developed various websites for global clients on Upwork.",
    longDescription: "Developed responsive websites using HTML, CSS, SCSS, Bootstrap, JavaScript, and jQuery. Communicated effectively with clients to understand their requirements and preferences, and collaborated on global freelancing projects.",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    tags: ["HTML", "SCSS", "Bootstrap", "JavaScript", "jQuery"],
  },
  {
    id: 3,
    title: "Internal Web Projects",
    description: "Built responsive websites and mini-projects during my roles at Bdevs and WebDev Software Solutions.",
    longDescription: "Gained hands-on expertise in Responsive Design, SEO, Bootstrap, and SCSS. Ensured cross-browser compatibility and adaptive design using media queries. Customized websites with WordPress, handling themes, plugins, and basic PHP. Built mini JavaScript projects and solved 200+ JS challenges on GitHub.",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    tags: ["Responsive Design", "WordPress", "PHP", "JavaScript"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Associate Software Developer",
        company: "Softzino Technologies, Dhaka",
        period: "Jan 2024 – Present",
        description: [
            "Worked on Japanese client projects, focusing on Elementor-based WordPress development.",
            "Built and customized WordPress themes and developed custom Elementor widgets with dynamic controls.",
            "Created responsive HTML templates following ThemeForest standards.",
            "Developed and maintained WordPress plugins tailored to specific project needs.",
            "Fixed advanced Elementor bugs and layout issues with clean, optimized code.",
            "Collaborated within a dedicated team to deliver scalable, high-performance websites."
        ],
    },
    {
        role: "Online Tutor on demand",
        company: "SSPTV, West Bengal, India",
        period: "Aug 2023 - Oct 2024",
        description: [
            "Delivering web development instruction for a training center, educating students in HTML, CSS, SASS, Bootstrap, JavaScript, and jQuery."
        ],
    },
    {
        role: "Web Designer/Developer",
        company: "Upwork.com",
        period: "Jan 2023 - Present",
        description: [
            "Developed websites using HTML, CSS, SCSS, Bootstrap, JS and jQuery.",
            "Communicating effectively with clients to understand their requirements and preferences.",
            "Collaborated on global freelancing projects."
        ],
    },
    {
        role: "Web Designer",
        company: "WebDev Software Solutions, Joypurhat",
        period: "Nov 2022 – Dec 2023",
        description: [
            "Developed responsive websites using HTML, SCSS, Bootstrap, JavaScript, and jQuery.",
            "Ensured cross-browser compatibility and adaptive design using media queries.",
            "Used Git/GitHub for version control and collaboration.",
            "Customized websites with WordPress, handling themes, plugins, and basic PHP.",
            "Built mini JavaScript projects and solved 200+ JS challenges on GitHub."
        ],
    },
    {
        role: "Web Designer Intern",
        company: "Bdevs, Dhaka",
        period: "Aug 2022 - Oct 2022",
        description: [
            "Collaborated with developers to write and maintain clean, efficient code.",
            "Gained hands-on expertise in Responsive Design, SEO, Bootstrap, and SCSS.",
            "Built responsive websites using HTML, CSS/SCSS, Bootstrap, JavaScript, and jQuery.",
            "Ensured cross-browser compatibility and device responsiveness with media queries and adaptive techniques."
        ],
    },
    {
        role: "Web Design Trainee",
        company: "WebDev Software Solutions, Joypurhat",
        period: "Apr 2022 – Jul 2022",
        description: [
            "Enthusiastic Web Design Trainee proficient in HTML, CSS, and JavaScript.",
            "Actively applying these technologies to acquire hands-on experience."
        ],
    }
];

export const EDUCATION: EducationItem[] = [
    {
        degree: "HSC in Science",
        institution: "Jahangirpur Govt. Collage, Mohadevpur, Naogaon",
        period: "Dec 2019 - Dec 2021",
    },
    {
        degree: "SSC in Science",
        institution: "Bagdob High School, Mohadevpur, Naogaon",
        period: "Jan 2014 - Nov 2019",
    }
];

export const ONLINE_COURSES: OnlineCourseItem[] = [
    { title: "Web Designer Courses", platform: "BanglaDevs, Dhaka" },
    { title: "PSD to HTML", platform: "Bangla-devs" },
    { title: "SASS & Bootstrap", platform: "Bangla-devs" },
    { title: "WordPress Theme Developement", platform: "Weblearn" },
];


export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Power of Custom Elementor Widgets",
    excerpt: "A look into how custom Elementor widgets can transform a standard WordPress site into a unique, dynamic experience.",
    date: "July 15, 2024",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
  },
  {
    id: 2,
    title: "From WordPress to Headless: A Next.js Journey",
    excerpt: "Exploring the benefits of a headless CMS architecture using WordPress with a Next.js frontend.",
    date: "June 28, 2024",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
  },
  {
    id: 3,
    title: "Styling with Speed: A Tailwind CSS Deep Dive",
    excerpt: "How utility-first CSS with Tailwind can dramatically speed up development and improve maintainability.",
    date: "May 10, 2024",
    imageUrl: "https://picsum.photos/seed/blog3/600/400",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: "https://picsum.photos/seed/gallery1/600/600", alt: "Abstract colorful design" },
    { id: 2, src: "https://picsum.photos/seed/gallery2/600/600", alt: "Modern workspace with laptop" },
    { id: 3, src: "https://picsum.photos/seed/gallery3/600/600", alt: "Cityscape at night" },
    { id: 4, src: "https://picsum.photos/seed/gallery4/600/600", alt: "Serene nature landscape" },
    { id: 5, src: "https://picsum.photos/seed/gallery5/600/600", alt: "Minimalist interior design" },
    { id: 6, src: "https://picsum.photos/seed/gallery6/600/600", alt: "Close-up of code on a screen" },
];