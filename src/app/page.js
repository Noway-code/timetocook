"use client";

import {useEffect, useLayoutEffect, useRef, useState} from "react";
import useAnimateOnScroll from './components/useAnimateOnScroll';
import Section from './components/Section';
import Link from "next/link";
import {Element, Link as ScrollLink} from 'react-scroll';
import Projects from './components/Projects';
import {motion} from "framer-motion";
import icons from "@/app/data/icons";

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

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Calculate background position
	const backgroundPositionY = scrollY * 0.5;


	const renderIcons = () => {
		return icons.map((icon) => (
			<div key={icon.name} className="items-center mx-10 px-10">
				<img src={icon.url} alt={icon.name} className="w-full h-full mb-2 p-1 mx-12"/>
			</div>
		));
	};


	return (
		<div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-800 via-indigo-900 to-gray-800">
			{/* Parallax Background */}
			<div
				className="absolute top-0 left-0 w-full "
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
					<motion.h1
						className="text-8xl font-extrabold mb-6"
						initial={{opacity: 0, y: -50}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8}}
					>
						Hello, I&apos;m Camilo
					</motion.h1>

					<p className="text-3xl max-w-3xl mb-6 mx-4">
						I&apos;m a passionate software engineer with experience building full-stack applications, machine learning models, and biotech
						solutions.
					</p>


					<div className="mt-10  flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
						<ScrollLink
							to="resume-projects-section"
							smooth={true}
							duration={1000}
							className="flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
						>
							View Resume & Projects
						</ScrollLink>
						<Link
							href="/projects"
							className="flex items-center justify-center rounded-md bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-800 transition-colors duration-300"
						>
							Check out my Blog
						</Link>
					</div>
				</Section>

				{/* About Me Section */}
				<Section className="flex flex-col items-center justify-center text-center px-4 py-10 mb-14 sm:mb-10 lg:mb-32">

					<motion.h2
						className="text-3xl md:text-5xl mb-6 "
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{duration: 1}}
					>
						<div className="flex flex-col md:flex-row justify-center items-center bg-amber-50 rounded-2xl md:p-4">
							<div className="text-purple-500 font-bold lg:ml-8 text-2xl md:text-4xl mb-4 md:mb-0 lg:px-32">
								About Me
							</div>
							<code className="block text-xs md:text-lg mt-4 mx-2 md:mt-0 text-gray-500 font-mono leading-none whitespace-pre-wrap">

								{`
                 ／＞　 フ 	      
                | 　_　_|  	      
              ／\` ミ＿xノ  	      
             /　　　　 |  	      
            /　 ヽ　　 ﾉ  	      
            │　　|　|　| 	      
         /￣|　  |　|　|		      
		 (￣ヽ＿_ヽ_)__)			  
		   ＼二)                    
    `}
							</code>
						</div>
					</motion.h2>

					<span className="text-2xl max-w-4xl mb-8 ">
						I&apos;m a software engineer based in Orlando, Florida, specializing in
						building high-performance web applications. I’m passionate about
						integrating technology with everyday life and enjoy experimenting with
						new programming languages and frameworks. I previously worked as a software developer intern at{' '}
						<Link
							href="/activity"
							className="inline-block p-1 rounded-md cursor-pointer font-semibold bg-white text-red-500 hover:bg-red-600 hover:text-white transition-colors duration-300"
						>
							Thermo Fisher
							<span className="font-light text-black hover:text-white"> Scientific</span>
						</Link>
						, where I built scalable applications in a fast-paced environments.
					</span>
					<span className="text-2xl max-w-4xl mb-8">
						My interests extend into robotics and AI, with a focus on making complex
						systems simple and intuitive. Whether it’s through full-stack
						development, biotech, or automation, I’m always looking for ways to
						make an impact.
					</span>


				</Section>


				{/* Skills Section */}
				<Section className="flex flex-col items-center justify-center text-center py-20 overflow-hidden bg-amber-50 mb-5">
					<h2 className="text-5xl text-black font-bold mb-8">Skills & Technologies</h2>
					<div className="relative flex overflow-hidden">
						<div className="flex animate-marquee whitespace-nowrap">
							{/* First set of icons */}
							{renderIcons()}
						</div>
						<div className="flex animate-marquee whitespace-nowrap">
							{/* Second set of icons to make the loop seamless */}
							{renderIcons()}
						</div>
						<div className="flex animate-marquee whitespace-nowrap">
							{/* Second set of icons to make the loop seamless */}
							{renderIcons()}
						</div>
					</div>
				</Section>


				{/* Resume and Projects Section Side by Side */}
				<Element name="resume-projects-section">
					<h2 className="text-5xl font-extrabold text-center mb-12">
						Projects and Experience
					</h2>
					<Section
						id="resume-projects"
						className="flex flex-col lg:flex-row w-full pb-10"
						delay={400}
					>
						{/* Resume Section */}
						<div className="flex flex-col justify-start w-full lg:w-1/2 p-4">
							<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-3xl font-bold mb-4 text-center">My Resume</h3>
								<div className="mt-4 flex justify-center">
									<iframe
										src="https://docs.google.com/document/d/e/2PACX-1vQvk_XUpa-kDAMopAib8GnMKcpiC8jIXq8K-8hFTWangCKnbfaKG30KtNwW-CzXww/pub?embedded=true"
										className="w-full h-screen rounded-lg"
										title="Resume"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col w-full lg:w-1/2 p-4">
							<Projects/>
						</div>
					</Section>
				</Element>

				{/* Contact Section */}
				<Section
					className="flex min-h-screen flex-col justify-center w-full text-center mt-40"
					delay={800}
				>
					<h2 className="text-5xl font-extrabold mb-6">Get In Touch</h2>
					<p className="text-lg max-w-3xl mx-auto mb-8">
						I&apos;m always open to discussing new opportunities, collaborations, or just chatting about tech and science. Feel free to
						reach out!
					</p>
					<div className="flex justify-center space-x-6">
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
