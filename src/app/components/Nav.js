import Link from 'next/link';

const Nav = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<ul className="flex space-x-4">
				<li>
					<Link href="/">
						Home
					</Link>
				</li>
				<li>
					<Link href="/projects">
						Projects
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
