import type { Project, Experience, SkillCategory, Education, SocialLink } from "@/types";

export const personalInfo = {
	name: "Sai Sumanth Valluri",
	firstName: "Sai Sumanth",
	lastName: "Valluri",
	role: "Senior Frontend Developer",
	tagline: "SDE · React · Next.js Specialist",
	email: "vsaisumanth9951@gmail.com",
	phone: "+91 9951442684",
	location: "Hyderabad, Telangana, India",
	about: `I'm a Senior Frontend Developer with 4 years of experience building fast, scalable, and accessible web applications. I specialize in React and Next.js, with a sharp eye for UI/UX and a passion for clean, maintainable code. From architecting headless CMS platforms to shipping interactive learning modules for thousands of students — I turn complex requirements into elegant experiences.`,
	// resumeUrl: "https://drive.google.com/file/d/1uxxbt2JSOuiwcFaV76N5qSMkyAf1pYLM/view?usp=drive_link",
	resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
	{ name: "LinkedIn", url: "https://www.linkedin.com/in/v-sai-sumanth/", icon: "linkedin" },
	{ name: "GitHub", url: "https://github.com/saisumanthvalluri", icon: "github" },
	{ name: "Email", url: "mailto:vsaisumanth9951@gmail.com", icon: "email" },
	{ name: "Phone", url: "tel:+919951442684", icon: "phone" },
];

export const achievements = [
	{ value: "4+", label: "Years Experience" },
	{ value: "~80%", label: "Publishing Time Reduced" },
	{ value: "~35%", label: "Performance Boost" },
	{ value: "20+", label: "Projects Shipped" },
];

export const experiences: Experience[] = [
	{
		id: "infinity-learn",
		company: "Infinity Learn",
		role: "Software Development Engineer",
		period: "Sep 2022 – Present",
		location: "Hyderabad, India",
		description: [
			"Architected a headless CMS platform using Directus + Next.js, enabling real-time content management, faster publishing, and scalable page creation across the company website.",
			"Implemented a robust multi-role permission system (Super Admin, City Head, Centre Head) with granular RBAC, ensuring secure access control and operational efficiency.",
			"Designed and maintained dual environments (Preprod/Prod) with a manual sync mechanism, allowing safe content validation before production releases.",
			"Improved page load performance by ~35% through optimized data fetching, caching strategies, code splitting, and lazy loading, significantly enhancing user experience.",
			"Developed a scalable Admin Dashboard using React, Redux, Context API and Material UI, streamlining management of users, schools, centres, and permissions.",
			"Built interactive learning modules and real-time assessments for Grades 6–12 (CBSE, JEE, NEET) using Angular, supporting live classes, test series, and doubt-resolution workflows.",
			"Developed and maintained backend services using Node.js and Express.js for real-time chat and music streaming applications.",
		],
		technologies: [
			"React",
			"Next.js",
			"Angular",
			"Node.js",
			"Express.js",
			"Directus",
			"Redux",
			"Zustand",
			"Context API",
			"Material UI",
			"JWT",
			"MongoDB",
			"Firebase",
		],
	},
];

export const skillCategories: SkillCategory[] = [
	{
		category: "Frontend",
		icon: "🎨",
		skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
	},
	{
		category: "Backend",
		icon: "⚙️",
		skills: ["Node.js", "Express.js", "Firebase", "MongoDB", "REST APIs"],
	},
	{
		category: "State & CMS",
		icon: "🗄️",
		skills: ["Redux", "Zustand", "Context API", "Directus", "AEM (Headless)"],
	},
	{
		category: "Tools & DevOps",
		icon: "🛠️",
		skills: ["Git", "Bitbucket", "Jira", "npm", "AWS", "Jest", "React Testing Library"],
	},
	{
		category: "Practices",
		icon: "✅",
		skills: [
			"Responsive Design",
			"Lazy Loading",
			"Code Splitting",
			"WCAG Accessibility",
			"Modular Architecture",
			"Agile",
		],
	},
];

export const projects: Project[] = [
	{
		id: "chat-sphere",
		title: "Chat Sphere",
		description: "Real-time chatting application with social features",
		longDescription:
			"A full-featured real-time chat platform supporting sign-in/sign-up, password reset, image/file sharing, friend requests, blocking/unblocking, and profile customization with smooth UI animations. Firebase Real-time Database syncs chat data instantly across all users.",
		techStack: ["React (Vite)", "Firebase", "Zustand", "CSS Animations"],
		liveUrl: "https://chat-sphere-global.vercel.app/",
		codeUrl: "https://github.com/saisumanthvalluri/Chat-Sphere",
		image: "/assets/projects/Chat-Sphere-home.jpg",
		gradient: "from-violet-500 to-purple-700",
		featured: true,
	},
	{
		id: "spotify-clone",
		title: "Spotify Clone",
		description: "Full-featured music streaming application",
		longDescription:
			"A MERN-stack Spotify clone with seamless playback controls, volume adjustment, and navigation. Features JWT-based authentication, real-time chat between users, admin dashboard for managing songs and albums, user activity tracking, and an analytics dashboard for usage insights.",
		techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Socket.io"],
		liveUrl: "https://spotify-ajt1.onrender.com/",
		codeUrl: "https://github.com/saisumanthvalluri/spotify",
		image: "/assets/projects/spotify.jpg",
		gradient: "from-green-500 to-emerald-700",
		featured: true,
	},
	{
		id: "nxt-watch",
		title: "Nxt Watch",
		description: "YouTube-like video streaming application",
		longDescription:
			"A YouTube-like video streaming app with Trending, Gaming, and Saved Videos tabs. Features Light/Dark mode toggle, search functionality, protected routes via React Router, and JWT-based secure login with session persistence. Username (rahul) and password (rahul@2021) via HTTP API calls.",
		techStack: ["React", "React Router", "Context API", "JWT", "CSS"],
		liveUrl: "https://nwatchsumanth.ccbp.tech/",
		image: "/assets/projects/NxtWatch-app.png",
		gradient: "from-red-500 to-rose-700",
		featured: false,
	},
];

export const education: Education[] = [
	{
		institution: "Nxtwave Disruptive Technologies",
		degree: "Industry Ready Certification in Full-Stack Development",
		period: "Feb 2022 – July 2022",
	},
	{
		institution: "Vikas Group of Institutions, Vijayawada",
		degree: "B.Tech in Mechanical Engineering (CGPA: 7.8)",
		period: "June 2017 – Aug 2021",
	},
];
