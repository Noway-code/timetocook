import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join(process.cwd(), 'src/app/projects'));

	return files.map((filename) => ({
		slug: filename.replace('.md', ''),
	}));
}

export default async function Project({ params }) {
	const { slug } = params;
	const filePath = path.join(process.cwd(), 'src/app/projects', `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');

	const { data: frontMatter, content } = matter(fileContent);
	const processedContent = await remark().use(html).process(content);
	const contentHtml = processedContent.toString();

	return (
		<div className="bg-gray-900 min-h-screen text-white p-4">
			<h1 className="text-4xl font-bold">{frontMatter.title}</h1>
			<p className="text-gray-400">{frontMatter.date}</p>
			<div className="mt-4" dangerouslySetInnerHTML={{ __html: contentHtml }} />
		</div>
	);
}
