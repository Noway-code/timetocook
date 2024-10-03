import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import Link from "next/link";

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join(process.cwd(), 'src/app/projects'));

	return files
		.filter((filename) => path.extname(filename) === '.md') // Ensure only Markdown files
		.map((filename) => ({
			slug: filename.replace('.md', ''),
		}));
}

export default async function Project({ params }) {
	const {slug} = params;
	const filePath = path.join(process.cwd(), 'src/app/projects', `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const {data: frontMatter, content} = matter(fileContent);

	const processedContent = await remark()
		.use(remarkGfm)
		.use(remarkRehype, {allowDangerousHtml: true}) // Convert to HTML AST
		.use(rehypeRaw) // Process raw HTML
		.use(rehypeHighlight) // Syntax highlighting
		.use(rehypeStringify) // Serialize HTML
		.process(content);

	const contentHtml = processedContent.toString();

	return (
		<div className="bg-gray-900 min-h-screen text-white p-8">
			<Link href="/projects" className="text-blue-400 hover:text-blue-200">
				← Back to Projects
			</Link>
			<h1 className="text-5xl font-bold mt-2 mb-4">{frontMatter.title}</h1>
			<p className="text-gray-400 mb-8">
				{new Date(frontMatter.date).toLocaleDateString('en-US', {timeZone: 'UTC'})}
			</p>
			<div
				className="prose prose-invert max-w-none"
				dangerouslySetInnerHTML={{__html: contentHtml}}
			/>
		</div>
	);
}
