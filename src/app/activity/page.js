"use client";

import useAnimateOnScroll from '../components/useAnimateOnScroll';
import Section from '../components/Section';
import GitHubFeed from "../components/GithubFeed";
import GitHubCalendar from 'react-github-calendar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "@/app/components/Nav";
import {Element, Link as ScrollLink} from 'react-scroll';
import Projects from "@/app/data/projects";


export default function Page() {
	useAnimateOnScroll();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		adaptiveHeight: true,
		centerMode: true,
		centerPadding: "0",
	};

	return (<div className="bg-blue-950">
		<Element name="nav"><Nav/></Element>
		<div className="px-10 mx-auto min-h-screen flex flex-col items-start justify-center space-y-10 text-white">
			<Element name="recent-activity">
				<Section className="h-screen flex flex-col justify-center" delay={200}>
					<h1 className="font-black text-6xl mb-6">Recent Activity</h1>
					<p className="text-2xl mb-6">Here is an overview of my recent contributions and projects.</p>

					{/* Jump to Links */}
					<div
						className="flex flex-col md:flex-row items-center bg-blue-900 rounded-2xl p-4 space-y-4 md:space-y-0 md:space-x-4 font-bold">
						<p className="text-amber-50 text-2xl text-center">Jump to:</p>
						<ul className="flex flex-wrap justify-center space-x-4">
							<li className="bg-blue-500 p-2 rounded-lg">
								<ScrollLink to="recent-activity" smooth={true} duration={500} className="cursor-pointer">
									Recent Activity
								</ScrollLink>
							</li>
							<li className="bg-blue-500 p-2 rounded-lg">
								<ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">
									Projects
								</ScrollLink>
							</li>
							<li className="bg-blue-500 p-2 rounded-lg">
								<ScrollLink to="github-activity" smooth={true} duration={500} className="cursor-pointer">
									GitHub Activity
								</ScrollLink>
							</li>
							<li className="bg-blue-500 p-2 rounded-lg">
								<ScrollLink to="tech-stack" smooth={true} duration={500} className="cursor-pointer">
									Tech Stack
								</ScrollLink>
							</li>
						</ul>
					</div>
				</Section>
			</Element>

			{/* Projects Section */}
			<Element name="projects">
				<Section className="w-full">
					<h2 className="text-4xl font-bold mb-4">Highlighted Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{Projects.map((project) => (
							<div
								key={project.id}
								className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col"
							>
								<h3 className="text-2xl font-bold mb-2">{project.title}</h3>

								{/* Image Carousel */}
								<Slider {...settings}>
									{project.images.map((image, index) => (
										<div key={index}>
											<img
												src={image}
												alt={`Screenshot of ${project.title}`}
												className="w-full object-cover object-center rounded-lg max-h-60 md:max-h-80 lg:max-h-100 xl:max-h-120 2xl:max-h-144 3xl:max-h-160"
											/>
										</div>
									))}
								</Slider>

								<p className="text-gray-400 mt-4">{project.description}</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap justify-start gap-2 mt-4">
									{project.techStack.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-gray-700 text-white rounded-full"
										>
              {tech}
            </span>
									))}
								</div>

								{/* Links */}
								<div className="flex flex-wrap justify-start gap-2 mt-auto">
									{project.links.map((link, index) => (
										<a
											key={index}
											href={link.url}
											className="inline-block px-4 py-2 bg-indigo-600 text-white rounded mt-2 hover:bg-indigo-500 transition-colors duration-300"
											target="_blank"
											rel="noopener noreferrer"
										>
											View {link.name}
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</Section>

			</Element>

			{/* GitHub Activity Section */}
			<Element name="github-activity">
				<Section className="w-full">
					<div>
						<h2 className="text-4xl font-bold mb-4">GitHub Contributions</h2>
						<div className="border-gray-300 border-2 bg-gray-800 rounded-2xl p-4 mb-8">
							<GitHubCalendar username="Noway-code"/>
						</div>

						<div className="border-gray-300 border-2 bg-gray-800 rounded-2xl p-4 mb-8">
							<h3 className="text-3xl mb-2">Recent Commits</h3>
							<GitHubFeed/>
						</div>
					</div>
				</Section>
			</Element>

			{/* Tech Stack Section */}
			<Element name="tech-stack">
				<Section className="w-full">
					<h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
					<div className="flex flex-wrap justify-start gap-4">
						<span className="px-4 py-2 bg-gray-700 text-white rounded-full">JavaScript</span>
						<span className="px-4 py-2 bg-gray-700 text-white rounded-full">React</span>
						<span className="px-4 py-2 bg-gray-700 text-white rounded-full">Node.js</span>
						<span className="px-4 py-2 bg-gray-700 text-white rounded-full">Python</span>
						<span className="px-4 py-2 bg-gray-700 text-white rounded-full">C#</span>
						<span className="px-4 py-2 bg-gray-700 text-white rounded-full">FastAPI</span>
						<span className="px-4 py-2 bg-gray-700 text-white rounded-full">Azure</span>
					</div>
				</Section>
				i actually dont know what to put here yet so ignore this section
			</Element>

			{/* Footer Section */}
			<div className="w-full text-center mt-8">
				<p className="text-lg">Feel free to explore more about my work on GitHub and connect with me!</p>

				{/* Back to Top Scroll Link */}
				<div className="mt-8">
					<ScrollLink
						to="nav"
						smooth={true}
						duration={500}
						className="cursor-pointer inline-block px-4 mb-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors duration-300"
					>
						Back to Top
					</ScrollLink>
				</div>
			</div>
		</div>
	</div>);
}