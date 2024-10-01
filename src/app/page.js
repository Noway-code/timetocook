"use client";

import {useEffect, useLayoutEffect, useRef, useState} from "react";
import useAnimateOnScroll from './components/useAnimateOnScroll';
import Section from './components/Section';
import Link from "next/link";
import {Element, Link as ScrollLink} from 'react-scroll';

export default function Home() {
	useAnimateOnScroll();

	// State to hold the scroll position
	const [scrollY, setScrollY] = useState(0);

	// State to hold the content height
	const [contentHeight, setContentHeight] = useState(0);

	// Ref to hold the main content container
	const contentRef = useRef(null);

	// Effect to update scroll position
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		// Add event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Use useLayoutEffect to measure content height after component mounts
	useLayoutEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, []);

	// Handle window resize to update content height
	useEffect(() => {
		const handleResize = () => {
			if (contentRef.current) {
				setContentHeight(contentRef.current.scrollHeight);
			}
		};

		window.addEventListener("resize", handleResize);

		// Clean up
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Calculate background position
	const backgroundPositionY = scrollY * 0.5; // Adjust the multiplier to control parallax speed

	return (
		<div className="relative w-full overflow-hidden">
			{/* Parallax Background */}
			<div
				className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-800 via-indigo-950 to-blue-950"
				style={{
					height: `${contentHeight}px`,
					transform: `translateY(-${backgroundPositionY}px)`,
					willChange: 'transform',
				}}
			/>

			{/* Main Content */}
			<div
				className="relative z-10 flex flex-col items-stretch text-white"
				ref={contentRef}
			>
				{/* Hero Section */}
				<Section
					className="flex min-h-screen flex-col items-center justify-center w-full text-center"
					delay={200}
				>
					<h1 className="text-7xl font-extrabold mb-6">Hello, I&apos;m Camilo</h1>
					<p className="text-2xl max-w-3xl">
						I&apos;m a software engineer who loves building cool stuff, from web apps to biotech. Right now,
						I&apos;m juggling a bunch of personal projects and working as a software developer intern at{' '}
						<Link
							href="/activity"
							className="inline-block p-1 rounded-md cursor-pointer font-semibold bg-white text-red-500 hover:bg-red-600 hover:text-white transition-colors duration-300"
						>
							Thermo Fisher
							<span className="font-light text-black hover:text-white">
                {' '}
								Scientific
              </span>
						</Link>
						.
					</p>
					<div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
						<Link
							href="/projects"
							className="flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 transition-colors duration-300"
						>
							Get Started
						</Link>
						<ScrollLink
							to="resume-projects-section"
							smooth={true}
							duration={1000}
							className="flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
						>
							View Resume & Projects
						</ScrollLink>
					</div>
				</Section>

				{/* Resume and Projects Section Side by Side */}
				<Element name="resume-projects-section">
					<Section
						id="resume-projects"
						className="flex flex-col lg:flex-row w-full pb-30 mb-30"
						delay={400}
					>
						{/* Resume Section */}
						<div className="flex flex-col justify-center w-full lg:w-1/2 p-4">
							<h2 className="text-5xl font-extrabold text-center mb-20">
								My Resume
							</h2>
							<div className="mt-4 flex justify-center">
								<iframe
									src="https://docs.google.com/document/d/e/2PACX-1vQvk_XUpa-kDAMopAib8GnMKcpiC8jIXq8K-8hFTWangCKnbfaKG30KtNwW-CzXww/pub?embedded=true"
									className="border border-gray-300 w-full h-screen"
									title="Resume"
								/>
							</div>
						</div>

						{/* Projects and Experience Section */}
						<div className="flex flex-col justify-center w-full lg:w-1/2 p-4">
							<h2 className="text-5xl font-extrabold text-center mb-6">
								Projects and Experience
							</h2>
							<p className="text-lg mx-auto">
								Here&apos;s a showcase of my latest projects and experiences. From
								developing web applications to exploring biotech innovations, I&apos;m
								always eager to tackle new challenges and learn new technologies.
							</p>
							{/* Add more content here, such as project cards or experience lists */}
						</div>
					</Section>
				</Element>

				{/* Contact Section */}
				<Section
					className="flex min-h-screen flex-col justify-center w-full text-center mt-80"
					delay={800}
				>
					<h2 className="text-5xl font-extrabold mb-6">Get In Touch</h2>
					<p className="text-lg max-w-3xl mx-auto mb-8">
						I&apos;m always open to discussing new opportunities, collaborations, or
						just chatting about tech and science. Feel free to reach out!
					</p>
					<div className="flex justify-center space-x-6">
						{/* Replace '#' with your actual profile links */}
						<a
							href="https://www.linkedin.com/in/camilo-alvarez-velez/"
							className="text-indigo-400 hover:text-indigo-600 transition-colors duration-300"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/Noway-code"
							className="text-indigo-400 hover:text-indigo-600 transition-colors duration-300"
						>
							GitHub
						</a>
						<a
							href="mailto:camiloalvarezvelez@outlook.com"
							className="text-indigo-400 hover:text-indigo-600 transition-colors duration-300"
						>
							Email
						</a>
					</div>
				</Section>
			</div>
		</div>
	);
}
