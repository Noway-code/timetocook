"use client";

import useAnimateOnScroll from './components/useAnimateOnScroll';
import Section from './components/Section';

export default function Home() {
	useAnimateOnScroll();

	return (
		<div className="bg-gray-800 mx-auto min-h-screen flex flex-col items-start justify-center space-y-10 px-10">
			<Section className="h-screen flex flex-col justify-center" delay={500}>
				<h1 className="font-black text-6xl">
					Hells to the Yeah
				</h1>
				<p className="text-gray-500 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptas eius explicabo suscipit, nemo sapiente
					dignissimos, ipsum illum minus ab itaque accusamus reprehenderit. Quis fuga iusto saepe nobis sunt a. Lorem, ipsum dolor
					sit amet consectetur adipisicing elit. Optio ut nulla quos nemo nesciunt enim officiis laudantium, neque labore. Officia
					illo obcaecati, impedit distinctio dicta laudantium mollitia quam nihil quisquam!
				</p>

				<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
					<div className="rounded-md shadow">
						<a href="#"
						   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
							Get started
						</a>
					</div>
					<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<a href="#"
						   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
							Live demo
						</a>
					</div>
				</div>
			</Section>

			<Section className="h-screen flex flex-col justify-center">
				<h2 className="font-black text-5xl">
					More Content Here
				</h2>
				<p className="text-gray-500 text-lg">
					Additional lorem ipsum text to fill out the page and test the scrolling animation effect. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</Section>

			<Section className="h-screen flex flex-col justify-center">
				<h2 className="font-black text-5xl">
					Even More Content
				</h2>
				<p className="text-gray-500 text-lg">
					More placeholder text to ensure that the page has enough content to scroll and trigger the animation effect. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
				</p>
			</Section>

			<Section className="h-screen flex flex-col justify-center">
				<h2 className="font-black text-5xl">
					Final Section
				</h2>
				<p className="text-gray-500 text-lg">
					The final section with additional text to ensure the scrolling animation effect can be observed as you move down the page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
				</p>
			</Section>
		</div>
	);
}
