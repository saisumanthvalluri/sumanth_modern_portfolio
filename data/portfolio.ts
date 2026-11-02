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
	about: `I'm a Senior Frontend Developer with 4+ years of experience building fast, scalable, and accessible web applications. Currently at Coupa Software, I work on the frontend for Supply Chain Optimization (SCO) within the Direct & Indirect Spend team, building React/TypeScript UIs for data and process flows, backed by Playwright end-to-end test coverage. Previously, I specialized in React and Next.js — architecting headless CMS platforms and shipping interactive learning modules for thousands of students. I turn complex requirements into elegant, reliable experiences.`,
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
		id: "coupa",
		company: "Coupa Software",
		role: "Software Engineer",
		period: "Aug 2026 – Present",
		location: "Hyderabad, India",
		description: [
			"Working full-time as a Frontend Engineer in the Direct & Indirect Spend (D&I Spend – IND) team, focused on Supply Chain Optimization (SCO) features within Coupa's Business Spend Management platform.",
			"Build React/TypeScript UI for data flows and process flows covering Network Optimization, Transportation Optimization, and Inventory Optimization — turning complex supply-chain logic into clear, usable interfaces.",
			"Build model-creation workflows that feed structured input data into optimization models, enabling planners to run scenarios and surface actionable cost and efficiency insights.",
			"Collaborate cross-functionally with product, QE, and backend teams using Jira and Confluence to turn design specs into shippable features, following Coupa's internal engineering conventions and PR review standards.",
			"Design and author end-to-end (E2E) test cases with Playwright to validate SCO data and process flow screens before release.",
			"Work within a component-driven React frontend integrated with a Jenkins-based CI/CD pipeline, monitored in production via New Relic, with SonarQube and Snyk gating code quality and security in every release.",
			"Document data flows, process flows, and system architecture using Lucidchart to align engineering, product, and QA on SCO design decisions.",
		],
		technologies: [
			"React",
			"TypeScript",
			"JavaScript (ES6+)",
			"Playwright",
			"E2E Testing",
			"Jenkins",
			"CI/CD",
			"New Relic",
			"SonarQube",
			"Snyk",
			"Lucidchart",
			"Jira",
			"Confluence",
			"GitHub",
			"Agile/Scrum",
		],
	},
	{
		id: "infinity-learn",
		company: "Infinity Learn",
		role: "Software Development Engineer",
		period: "Sep 2022 – Aug 2026",
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
		skills: ["Git", "GitHub", "Bitbucket", "Jira", "Confluence", "npm", "AWS", "TeamCity", "Jenkins", "CI/CD"],
	},
	{
		category: "Testing & Quality",
		icon: "🧪",
		skills: ["Playwright", "E2E Testing", "Jest", "React Testing Library", "SonarQube", "Snyk"],
	},
	{
		category: "Monitoring & Docs",
		icon: "📊",
		skills: ["New Relic", "Lucidchart"],
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
