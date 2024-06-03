import './globals.css';
import Nav from "@/app/components/Nav";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Noway Portfolio",
  description: "Camilo Alvarez-Velez",
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
