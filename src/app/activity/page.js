"use client";

import useAnimateOnScroll from '../components/useAnimateOnScroll';
import Section from '../components/Section';
import GitHubFeed from "../components/GithubFeed";
import GitHubCalendar from 'react-github-calendar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "@/app/components/Nav";


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

	// samples for now, will integrate with projects data later
	const projects = [
		{
			id: 1,
			title: "AStarFriends",
			description:
				"A ride-sharing platform that optimizes routes using Google OR-Tools. Built with React, FastAPI, and Node.js. This project leverages graph-based algorithms to optimize shared rides for users in real-time.",
			images: [
				"/IMG_5266.JPEG",
				"/tree-736885_960_720.jpg",
				"/istockphoto-649725936-2048x2048.webp",
			],
			techStack: ["React", "Node.js", "FastAPI", "Google OR-Tools", "PostgreSQL"],
			githubLink: "https://github.com/Noway-code/AStarFriends",
		},
		{
			id: 2,
			title: "Town Trekker",
			description:
				"A full-stack app that fosters community engagement by allowing users to find and join local events. Built using React, TailwindCSS, and Node.js.",
			images: [
				"/IMG_5266.JPEG",
				"/istockphoto-649725936-2048x2048.webp",
				"/tree-736885_960_720.jpg",
			],
			techStack: ["React", "TailwindCSS", "Node.js", "MongoDB"],
			githubLink: "https://github.com/Noway-code/TownTrekker",
		},
	];

	return (
		<div className="bg-blue-950 ">
			<Nav/>
			<div className="px-10 mx-auto min-h-screen flex flex-col items-start justify-center space-y-10 text-white">

				{/* Recent Activity Section */}
				<Section className="h-screen flex flex-col justify-center" delay={200}>
					<h1 className="font-black text-6xl mb-6">Recent Activity</h1>
					<p className="text-2xl">Here is an overview of my recent contributions and projects.</p>
				</Section>

				{/* GitHub Activity */}
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

				{/* Detailed Projects Section with Carousel */}
				<Section className="w-full">
					<h2 className="text-4xl font-bold mb-4">Highlighted Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projects.map((project) => (
							<div
								key={project.id}
								className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
							>
								<h3 className="text-2xl font-bold mb-2">{project.title}</h3>

								{/* Image Carousel */}
								<Slider {...settings}>
									{project.images.map((image, index) => (
										<div key={index}>
											<img
												src={image}
												alt={`Screenshot of ${project.title}`}
												className="w-full h-60 md:h-72 object-cover object-center rounded-lg"
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

								<a
									href={project.githubLink}
									className="inline-block px-4 py-2 bg-indigo-600 text-white rounded mt-4 hover:bg-indigo-500 transition-colors duration-300"
								>
									View on GitHub
								</a>
							</div>
						))}
					</div>
				</Section>


				{/* Tech Stack (Global) */}
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

				{/* Footer Section */}
				<Section className="w-full text-center">
					<p className="text-lg">Feel free to explore more about my work on GitHub and connect with me!</p>
				</Section>
			</div>
		</div>
	);
}
