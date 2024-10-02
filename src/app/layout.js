import './globals.css';
import Nav from "@/app/components/Nav";
import {Analytics} from "@vercel/analytics/react";

export const metadata = {
	title: "Noway Portfolio!",
  description: "Camilo Alvarez-Velez",
	image: "run.png",
	url: "https://nowaycode.com",
	type: "website",
	site_name: "Noway Portfolio!",
	locale: "en_US",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			<link rel="icon" href="/run.png" sizes="64x64" type="image/png"/>
			<meta name="description" content="Camilo Alvarez-Velez's portfolio website"/>
			<meta name="title" content="Camilo's Portfolio"/>
		</head>
		<body>
		<Analytics/>
		<Nav/>
		{children}
		</body>
		</html>
	);
}
