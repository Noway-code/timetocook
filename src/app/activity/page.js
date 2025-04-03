"use client";

import useAnimateOnScroll from "../components/useAnimateOnScroll";
import Section from "../components/Section";
import GitHubFeed from "../components/GithubFeed";
import GitHubCalendar from "react-github-calendar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "@/app/components/Nav";
import {Element, Link as ScrollLink} from "react-scroll";
import Projects from "@/app/data/projects";
import SkillsSection from "@/app/components/SkillsSection";

export default function Page() {
    useAnimateOnScroll();

    const sliderSettings = {
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

    return (
        <div className="bg-gradient-to-br from-blue-900 to-purple-950 min-h-screen">
            {/* Navigation */}
            <Element name="nav">
                <Nav/>
            </Element>

            <div className="container mx-auto px-6 py-12 flex flex-col space-y-16">
                {/* Recent Activity Section */}
                <Element name="recent-activity">
                    <Section
                        className="flex flex-col items-center text-center justify-center min-h-screen"
                        delay={200}
                    >
                        <h1 className="font-black text-6xl mb-4 drop-shadow-lg">
                            Recent Activity
                        </h1>
                        <p className="text-2xl mb-8 max-w-2xl">
                            Get an overview of my latest contributions, projects, and coding
                            adventures.
                        </p>

                        {/* Jump-to Links */}
                        <div
                            className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 space-y-4 md:space-y-0 md:space-x-6 font-bold shadow-xl">
                            <span className="text-amber-50 text-2xl">Jump to:</span>
                            <ul className="flex flex-wrap justify-center gap-4">
                                <li className="bg-blue-500 px-4 py-2 rounded-lg">
                                    <ScrollLink
                                        to="recent-activity"
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer"
                                    >
                                        Recent Activity
                                    </ScrollLink>
                                </li>
                                <li className="bg-blue-500 px-4 py-2 rounded-lg">
                                    <ScrollLink
                                        to="projects"
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer"
                                    >
                                        Projects
                                    </ScrollLink>
                                </li>
                                <li className="bg-blue-500 px-4 py-2 rounded-lg">
                                    <ScrollLink
                                        to="github-activity"
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer"
                                    >
                                        GitHub Activity
                                    </ScrollLink>
                                </li>
                                <li className="bg-blue-500 px-4 py-2 rounded-lg">
                                    <ScrollLink
                                        to="tech-stack"
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer"
                                    >
                                        Tech Stack
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </Section>
                </Element>

                {/* Projects Section */}
                <Element name="projects">
                    <Section className="w-full" delay={300}>
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            Highlighted Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Projects.map((project) => (
                                <div
                                    key={project.id}
                                    className={`bg-gray-800 p-6 rounded-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-300 flex flex-col ${project.highlighted ? 'border-4 border-yellow-500' : ''}`}
                                >
                                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                    {/* Image Carousel */}
                                    <Slider {...sliderSettings}>
                                        {project.images.map((image, index) => (
                                            <div key={index}>
                                                <img
                                                    src={image}
                                                    alt={`Screenshot of ${project.title}`}
                                                    className="w-full object-cover object-center rounded-lg max-h-90"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                    <p className="text-gray-400 mt-4 flex-grow">
                                        {project.description}
                                    </p>
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
                                    <div className="flex flex-wrap justify-start gap-2 mt-4">
                                        {project.links.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors duration-300"
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
                    <Section className="w-full" delay={400}>
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6 text-center">
                                GitHub Contributions
                            </h2>
                            <div className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-xl">
                                <GitHubCalendar
                                    username="Noway-code"
                                    blockMargin={8}
                                    blockSize={15}
                                    fontSize={16}
                                />
                            </div>
                            <div className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-xl">
                                <h3 className="text-3xl mb-4">Recent Commits</h3>
                                <GitHubFeed/>
                            </div>
                        </div>
                    </Section>
                </Element>

                <SkillsSection/>

                {/* Footer */}
                <footer className="w-full text-center py-8">
                    <p className="text-lg">
                        Feel free to explore more about my work on GitHub and connect with me!
                    </p>
                    <ScrollLink
                        to="nav"
                        smooth={true}
                        duration={500}
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
                    >
                        Back to Top
                    </ScrollLink>
                </footer>
            </div>
        </div>
    );
}
