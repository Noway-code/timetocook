import { Inter } from "next/font/google";
import './globals.css';
import Nav from "@/app/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noway Portfolio",
  description: "Camilo Alvarez-Velez",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Nav />
					{children}
			</body>
		</html>
	);
}
