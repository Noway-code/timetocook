import Link from "next/link";

const Nav = () => {
	return (
		<nav className="relative z-20 bg-opacity-0 text-white p-4 font-bold">
			<ul className="flex space-x-4">
				<li>
					<Link href="/">
						Home
					</Link>
				</li>
				<li>
					<Link href="/projects">
						Blog
					</Link>
				</li>
				<li>
					<Link href="/activity">
						Activity
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
