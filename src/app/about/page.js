"use client";

import useAnimateOnScroll from '../components/useAnimateOnScroll';
import Section from '../components/Section';

export default function Page() {
	useAnimateOnScroll();

	return (
		<div className="bg-gray-700 mx-auto min-h-screen flex flex-col items-start justify-center space-y-10 px-10">
			<Section className="h-screen flex flex-col justify-center" delay={200}>
				<h1 className="font-black text-6xl">
					About Us
				</h1>
				<p className="text-gray-500 text-lg">
					This is the about page. Here you can put information about your website, company, or yourself.
				</p>
			</Section>
		</div>
	);
}
