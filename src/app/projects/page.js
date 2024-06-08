import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

async function getProjects() {
	const files = fs.readdirSync(path.join(process.cwd(), 'src/app/projects'));

	const projects = files
		.filter((filename) => path.extname(filename) === '.md') // Ensure only Markdown files
		.map((filename) => {
			const filePath = path.join(process.cwd(), 'src/app/projects', filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data: frontMatter } = matter(fileContent);

			return {
				frontMatter,
				slug: filename.replace('.md', ''),
			};
		});

	return projects;
}

export default async function Projects() {
	const projects = await getProjects();

	return (
		<div className="bg-gray-900 min-h-screen text-white p-4">
			<div className="bg-gray-700 mt-2 p-2">
				<h1 className="text-4xl font-bold mb-4">Welcome to my projects sandbox!</h1>
				<h2 className="mb-2">
					I thought it'd be a cool idea instead of making people clone repos and set up their environments just to demo my personal projects.
					I can go old school and integrate some demos here!
				</h2>
				<h2 className="mb-4">
					Hoping to get some machine learning projects in here as well as any cool tools I've been working on I think would be cool to share.
				</h2>
				<ul>
					{projects.map((project) => (
						<li key={project.slug} className="mb-2">
							<Link href={`/projects/${project.slug}`}>
								<div className="text-blue-400 hover:underline">{project.frontMatter.title}</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
