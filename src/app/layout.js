import './globals.css';
import {Analytics} from "@vercel/analytics/react";

export const metadata = {
	title: "Noway Portfolio!",
  description: "Camilo Alvarez-Velez",
	image: "run.png",
	url: "https://nowaycode.com",
	type: "website",
	site_name: "Camilo's Portfolio!",
	locale: "en_US",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			<link rel="icon" href="/run.png" sizes="64x64" type="image/png"/>
			<meta name="description" content="Camilo Alvarez-Velez's portfolio website"/>
			<meta name="title" content="Camilo's Portfolio"/>
			<title>Camilo&apos;s Portfolio</title>
		</head>
		<body>
		<Analytics/>
		{children}
		</body>
		</html>
	);
}
