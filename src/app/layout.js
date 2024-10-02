import './globals.css';
import Nav from "@/app/components/Nav";
import {Analytics} from "@vercel/analytics/react"

export const metadata = {
	title: "Noway Portfolio!",
  description: "Camilo Alvarez-Velez",
	image: "IMG_5266.JPEG",
	url: "https://nowaycode.com",
	type: "website",
	site_name: "Noway Portfolio!",
	locale: "en_US",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Analytics/>
				<Nav />
					{children}
			</body>
		</html>
	);
}
