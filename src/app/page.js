"use client";

import useAnimateOnScroll from './components/useAnimateOnScroll';
import Section from './components/Section';
import Link from "next/link";
import {useState} from "react";

export default function Home() {
	useAnimateOnScroll();
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (<div className="mx-auto flex min-h-screen flex-col items-start justify-center bg-gray-700 px-10 space-y-10">
		<Section className="flex h-screen flex-col items-center justify-center" delay={200}>
			<h1 className="text-7xl font-black">
				Hello, i&apos;m Camilo
			</h1>
			<div>
				<p className="text-2xl text-gray-200">
					I&apos;m a software engineer who loves building cool stuff, from web apps to mobile games. Right now,
					I&apos;m juggling a bunch of personal projects and working as a software developer intern at{' '}
					<Link href="/about">
						<span
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className={`inline-block p-1 rounded-md cursor-pointer font-semibold ${isHovered ? 'bg-red-600 text-white' : 'bg-white text-red-500'}`}
						>
            Thermo Fisher
            <span className={`font-light ${isHovered ? 'text-white' : 'text-black'}`}> Scientific</span>
          </span>
					</Link>.
				</p>

				<p className="mt-5 text-gray-200">
					I&apos;m also a student at UCF, always on the lookout for new ways to learn and level up my skills.
				</p>

			</div>


			<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
				<div className="rounded-md shadow">
					<Link href="/about">
						<div
							className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:shadow-outline-indigo focus:border-indigo-700 focus:outline-none md:px-10 md:py-4 md:text-lg">
							Get started
						</div>
					</Link>
				</div>
				<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
					<a href="#"
					   className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:shadow-outline-indigo focus:border-indigo-300 focus:outline-none md:px-10 md:py-4 md:text-lg">
						Live demo
					</a>
				</div>
			</div>
		</Section>

		<Section className="flex h-screen flex-col justify-center" delay={400}>
			<h2 className="text-5xl font-black">
				More Content Here
			</h2>
			<p className="text-lg text-gray-500">
				Additional lorem ipsum text to fill out the page and test the scrolling animation effect. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</Section>

		<Section className="flex h-screen flex-col justify-center" delay={600}>
			<h2 className="text-5xl font-black">
				Even More Content
			</h2>
			<p className="text-lg text-gray-500">
				More placeholder text to ensure that the page has enough content to scroll and trigger the animation effect. Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
			</p>
		</Section>

		<Section className="flex h-screen flex-col justify-center" delay={800}>
			<h2 className="text-5xl font-black">
				Final Section
			</h2>
			<p className="text-lg text-gray-500">
				The final section with additional text to ensure the scrolling animation effect can be observed as you move down the page. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
			</p>
		</Section>
	</div>);
}
