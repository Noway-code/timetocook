"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useAnimateOnScroll from "./components/useAnimateOnScroll";
import Section from "./components/Section";
import Link from "next/link";
import { Element, Link as ScrollLink } from "react-scroll";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import icons from "@/app/data/icons";
import Nav from "@/app/components/Nav";
import Image from "next/image";

// Import react-pdf components and set up the worker.
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Home() {
    useAnimateOnScroll();

    const [scrollY, setScrollY] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);
    // New state to track the number of pages in the PDF
    const [numPages, setNumPages] = useState(null);

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

    const renderIcons = () => {
        return icons.map((icon) => (
            <div key={icon.name} className="items-center mx-10 px-10">
                <img
                    src={icon.url}
                    alt={icon.name}
                    className="w-full h-full mb-2 p-1 mx-12"
                />
            </div>
        ));
    };

    // Handler for successful document load
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900">
            {/* Glassmorphic Background Overlay */}
            <div className="absolute inset-0 z-0 glass-bg" />

            {/* Updated Nav with higher z-index */}
            <Nav />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-stretch text-white" ref={contentRef}>
                {/* Hero Section */}
                <Section
                    className="flex min-h-screen flex-col items-center justify-center w-full text-center"
                    delay={200}
                >
                    <motion.h1
                        className="text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hello, I&apos;m Camilo
                    </motion.h1>

                    <p className="text-3xl max-w-3xl mb-6 mx-4">
                        I&apos;m a software engineer from Orlando who thrives on crafting clean,
                        efficient code and building solutions that make a real impact. Whether I&apos;m developing full‑stack web
                        applications or exploring machine learning projects, I love turning ideas into reality with creativity and
                        precision. Let’s build something awesome together!
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <ScrollLink
                            to="resume-projects-section"
                            smooth={true}
                            duration={1000}
                            className="flex items-center justify-center rounded-md bg-white/20 backdrop-blur-md border border-white/30 px-8 py-3 text-base font-medium text-white hover:bg-white/30 transition cursor-pointer"
                        >
                            View Resume &amp; Projects
                        </ScrollLink>
                        <Link
                            href="/projects"
                            className="flex items-center justify-center rounded-md bg-white/20 backdrop-blur-md border border-white/30 px-8 py-3 text-base font-medium text-white hover:bg-white/30 transition"
                        >
                            Check out my Blog
                        </Link>
                    </div>
                </Section>

                {/* About Me Section */}
                <Section
                    className="flex flex-col items-center justify-center text-center px-4 py-10 mb-14 sm:mb-10 lg:mb-32"
                >
                    <motion.h2
                        className="text-3xl md:text-5xl mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex flex-col md:flex-row justify-center items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl md:p-4">
                            <div className="text-indigo-300 font-bold lg:ml-8 text-2xl md:text-4xl mb-4 md:mb-0 lg:px-32">
                                About Me
                            </div>
                            <Image
                                src="/cat.png"
                                alt="cat"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                        </div>
                    </motion.h2>

                    <span className="text-2xl max-w-4xl mb-8">
            I&apos;ve interned at
            <Link
                href="/activity"
                className="inline-block ml-1 p-1 rounded-md bg-white/20 backdrop-blur-md border border-white/30 cursor-pointer font-semibold text-red-300 hover:bg-red-600 hover:text-white transition"
            >
              Thermo Fisher
              <span className="font-light text-white hover:text-white">
                {" "}
                  Scientific
              </span>
            </Link>
            , I developed scalable features for an advanced spectral cell sorter and contributed to Azure DevOps
            pipelines, enhancing deployment processes and ensuring reliable software delivery. One of my standout
            projects, <span className="font-bold ml-1">CreditShield</span>, won 1st place in BNY Mellon’s challenge at
            KnightHacks by utilizing machine learning for real‑time transaction analysis and incorporating blockchain
            technology for secure record verification.
          </span>
                    <span className="text-2xl max-w-4xl mb-8">
            I&apos;m a full‑stack web developer with a strong foundation in React, TailwindCSS, Node, and Express. I’m
            passionate about Python, using it extensively for backend development, scripting, and diving into machine
            learning with tools like OpenCV. Additionally, I love working in Linux environments and am proficient in bash
            scripting and PowerShell, which I use to automate tasks and optimize systems. When I&apos;m not coding, I enjoy
            staying up‑to‑date with the latest tech trends and collaborating on creative projects. Let&apos;s connect and
            create something amazing together!
          </span>
                </Section>

                {/* Skills Section */}
                <Section
                    className="flex flex-col items-center justify-center text-center py-20 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 mb-5"
                >
                    <h2 className="text-5xl font-bold mb-8">Skills &amp; Technologies</h2>
                    <div className="relative flex overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {renderIcons()}
                        </div>
                        <div className="flex animate-marquee whitespace-nowrap">
                            {renderIcons()}
                        </div>
                        <div className="flex animate-marquee whitespace-nowrap">
                            {renderIcons()}
                        </div>
                    </div>
                </Section>

                {/* Resume and Projects Section Side by Side */}
                <Element name="resume-projects-section">
                    <h2 className="text-5xl font-extrabold text-center mb-12">Projects and Experience</h2>
                    <Section id="resume-projects" className="flex flex-col lg:flex-row w-full pb-10" delay={400}>
                        {/* Resume Section */}
                        <div className="flex flex-col justify-start w-full lg:w-1/2 p-4">
                            <div className="p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/30">
                                <div className="flex flex-col sm:flex-row justify-between items-center m-4">
                                    <h3 className="text-3xl font-bold text-center">My Resume</h3>
                                    <div className="flex justify-center mt-4 sm:mt-0">
                                        <a
                                            href="/resume.pdf"
                                            download
                                            className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold py-2 px-4 rounded-md hover:bg-white/30 transition"
                                        >
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <iframe
                                        src="/resume.pdf#zoom=page-width"
                                        className="w-full h-[80vh] rounded-lg bg-gray-900 bg-opacity-30 p-4"
                                        title="Resume"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Projects Section */}
                        <div className="flex flex-col w-full lg:w-1/2 p-4">
                            <Projects/>
                            <Link
                                href="/activity"
                                className="mt-4 flex items-center justify-center rounded-md bg-white/20 backdrop-blur-md border border-white/30 px-8 py-3 text-base font-medium text-white hover:bg-white/30 transition"
                            >
                                For the full list of projects, check out my Activity page!
                            </Link>
                            <p className="font-thin text-xs mt-1">
                                please check it out i put so much work into it
                            </p>
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
                        I&apos;m always open to discussing new opportunities, collaborations, or just chatting about
                        tech and science. Feel free to reach out!
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.linkedin.com/in/camilo-alvarez-velez/"
                            className="text-indigo-300 hover:text-indigo-400 transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Noway-code"
                            className="text-indigo-300 hover:text-indigo-400 transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:camiloalvarezvelez@outlook.com"
                            className="text-indigo-300 hover:text-indigo-400 transition"
                        >
                            Email
                        </a>
                    </div>
                </Section>
            </div>

            {/* Back to Top Button with a higher z-index */}
            {scrollY > 300 && (
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed z-20 bottom-8 right-8 p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </motion.button>
            )}
        </div>
    );
}
