import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Nav from "@/app/components/Nav";

async function getProjects() {
	const files = fs.readdirSync(path.join(process.cwd(), 'src/app/projects'));

	const projects = files
		.filter((filename) => path.extname(filename) === '.md')
		.map((filename) => {
			const filePath = path.join(process.cwd(), 'src/app/projects', filename);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data: frontMatter } = matter(fileContent);

			return {
				frontMatter,
				slug: filename.replace('.md', ''),
			};
		});
	return projects.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date));
}

export default async function Projects() {
	const projects = await getProjects();

	return (
		<div className="bg-gray-900 min-h-screen text-white">
			<Nav/>
			<div className="p-4">
				<div className="bg-gray-700 mt-2 p-2">
					<h1 className="text-4xl font-bold mb-4">Welcome to my markdown blog!</h1>
					<h2 className="mb-2 pl-3 font-bold text-2xl">
						What is this?
					</h2>
					<h2 className="mb-4 pl-3">
						As a longtime fan of <Link href="https://obsidian.md" className=" font-bold"
						                           style={{color: 'rgb(139, 92, 246)'}}>Obsidian.md</Link>,
						and someone who appreciates the simplicity of pure markdown, I decided to bring those old-school markdown vibes back into
						blogging.
						I very much so reinvented the wheel here, but I thought I would try out SLUGS and get a feel for how they work.
						This was built with Next.js and Tailwind CSS, and I&apos;m using gray-matter to parse the front matter of my markdown files.
						<br/>
						<br/>
						Now here we are! This blog directly publishes content from my Obsidian vault so I can write in markdown and publish to the web
						just by commiting my changes to the repository.
						There may be more efficient ways to do this, but I never claimed to be a genius developer—just a persistent one.
					</h2>
					<ul>
						{projects.map((project) => (
							<li key={project.slug} className="mb-2">
								<Link href={`/projects/${project.slug}`}>
									<div className="text-blue-400 hover:underline flex flex-row">
										{project.frontMatter.title}
										<p className="text-gray-100 opacity-30 ml-1">
											({new Date(project.frontMatter.date).toLocaleDateString('en-US', {timeZone: 'UTC'})})
										</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
