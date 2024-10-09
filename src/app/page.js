"use client";

import {useEffect, useLayoutEffect, useRef, useState} from "react";
import useAnimateOnScroll from './components/useAnimateOnScroll';
import Section from './components/Section';
import Link from "next/link";
import {Element, Link as ScrollLink} from 'react-scroll';
import Projects from './components/Projects';
import {motion} from "framer-motion";
import icons from "@/app/data/icons";
import Nav from "@/app/components/Nav";

export default function Home() {
	useAnimateOnScroll();

	const [scrollY, setScrollY] = useState(0);
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef(null);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setScrollY(window.scrollY);
					ticking = false;
				});
				ticking = true;
			}
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

	// Parallax effect for background position
	const parallaxSpeed = .3;
	const backgroundPositionY = scrollY * parallaxSpeed;



	const renderIcons = () => {
		return icons.map((icon) => (
			<div key={icon.name} className="items-center mx-10 px-10">
				<img src={icon.url} alt={icon.name} className="w-full h-full mb-2 p-1 mx-12"/>
			</div>
		));
	};


	return (
		<div className="relative w-full overflow-hidden"
		     style={{background: 'linear-gradient(to bottom, rgb(128, 0, 128), rgb(75, 0, 130), rgb(30, 0, 30))'}}>
			{/* Parallax Background */}

			<Nav/>
			<div
				className="absolute inset-0 z-0 pattern-bg"
				style={{
					backgroundPosition: `center ${backgroundPositionY}px`,
					transition: "background-position 15s ease-out",
				}}
			></div>

			{/* Main Content */}
			<div
				className="relative z-10 flex flex-col items-stretch text-amber-50"
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
						I&apos;m a software engineer from Orlando who thrives on crafting clean,
						efficient code and building solutions that make a real impact.
						Whether I&apos;m developing full-stack web applications or exploring
						machine learning projects, I love turning ideas into reality with
						creativity and precision. Let’s build something awesome together!					</p>


					<div className="mt-10  flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
						<ScrollLink
							to="resume-projects-section"
							smooth={true}
							duration={1000}
							className="flex items-center justify-center rounded-md bg-amber-50 px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
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
						I&apos;ve interned at
						<Link
							href="/activity"
							className="inline-block ml-1 p-1 rounded-md bg-amber-50 cursor-pointer font-semibold text-red-500 hover:bg-red-600 hover:text-white transition-colors duration-300"
						>
							 Thermo Fisher
							<span className="font-light text-black hover:text-white"> Scientific</span>
						</Link>
						, I developed scalable features for an advanced spectral cell sorter
						and contributed to Azure DevOps pipelines, enhancing deployment processes
						and ensuring reliable software delivery. One of my standout projects,
						<span className="font-bold ml-1">CreditShield</span>, won 1st place in BNY
						Mellon’s challenge at KnightHacks by utilizing machine learning for
						real-time transaction analysis and incorporating blockchain technology
						for secure record verification.					</span>
					<span className="text-2xl max-w-4xl mb-8">
						I&apos;m a full-stack web developer with a strong foundation in React,
						TailwindCSS, Node, and Express. I’m passionate about
						Python, using it extensively for backend development,
						scripting, and diving into machine learning with tools like
						OpenCV. Additionally, I love working in Linux environments
						and am proficient in bash scripting and PowerShell,
						which I use to automate tasks and optimize systems.
						When I&apos;m not coding, I enjoy staying up-to-date with the
						latest tech trends and collaborating on creative projects.
						Let&apos;s connect and create something amazing together!
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
							<div className="bg-gray-800 p-6 rounded-lg shadow-lg ">
								<div className="flex flex-row justify-between items-center m-4  ">
									<h3 className="text-3xl font-bold text-center">My Resume</h3>
									<div className="flex justify-center mr-10">
										<a
											href="https://docs.google.com/document/d/1kg6MJMeK-1e4-C85Q1H2Gs-Pg34M_koB/export?format=pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-800 transition-colors duration-300"
										>
											Download Resume
										</a>
									</div>
								</div>
								<div className="mt-4 flex justify-center">
									<iframe
										src="https://docs.google.com/document/d/e/2PACX-1vQvk_XUpa-kDAMopAib8GnMKcpiC8jIXq8K-8hFTWangCKnbfaKG30KtNwW-CzXww/pub?embedded=true"
										className="w-full h-screen rounded-lg bg-gray-900 bg-opacity-30 p-4"
										title="Resume"
									/>
								</div>
							</div>


						</div>

						<div className="flex flex-col w-full lg:w-1/2 p-4">
							<Projects/>
							<Link
								href="/activity"
								className="mt-4 flex items-center justify-center rounded-md bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-800 transition-colors duration-300"
							>
								For the full list of projects, check out my Activity page!
							</Link>
							<p className="font-thin text-xs mt-1 ">please check it out i put so much work into it </p>
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
