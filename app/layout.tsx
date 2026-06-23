import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Sai Sumanth Valluri | Senior Frontend Developer",
	description:
		"Senior Frontend Developer with 4+ years of experience building scalable, high-performance web applications using React, Next.js, and TypeScript. Based in Hyderabad, India.",
	keywords: [
		"Sai Sumanth Valluri",
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Hyderabad",
		"SDE",
		"Web Developer",
		"Portfolio",
		"Full Stack Developer",
	],
	authors: [{ name: "Sai Sumanth Valluri", url: "https://sumanth-modern-portfolio.vercel.app/" }],
	creator: "Sai Sumanth Valluri",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://sumanth-modern-portfolio.vercel.app/",
		title: "Sai Sumanth Valluri | Senior Frontend Developer",
		description:
			"Senior Frontend Developer with 4+ years of experience in React & Next.js. Building fast, accessible, and beautiful web experiences.",
		siteName: "Sai Sumanth Valluri Portfolio",
		images: [
			{
				url: "/assets/my-image.jpeg",
				width: 1200,
				height: 630,
				alt: "Sai Sumanth Valluri - Senior Frontend Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sai Sumanth Valluri | Senior Frontend Developer",
		description: "Senior Frontend Developer specializing in React & Next.js.",
		images: ["/assets/my-image.jpeg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	metadataBase: new URL("https://sumanth-modern-portfolio.vercel.app/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" type="image/svg+xml" href="/icon.svg" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#5B4FE8" />
			</head>
			<body className="font-body">
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
