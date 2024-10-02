"use client";

import useAnimateOnScroll from '../components/useAnimateOnScroll';
import Section from '../components/Section';
import GitHubFeed from "../components/GithubFeed";
import GitHubCalendar from 'react-github-calendar';


export default function Page() {
	useAnimateOnScroll();

	return (
		<div className="bg-blue-950 mx-auto min-h-screen flex flex-col items-start justify-center space-y-10 px-10">
			<Section className="h-screen flex flex-col justify-center" delay={200}>
				<h1 className="font-black text-6xl">Recent Activity</h1>

			</Section>
			<Section className="w-full">
				<div>
					<h1>Welcome to My Portfolio</h1>
					<div className="border-gray-300 border-2 bg-gray-800 rounded-2xl p-4 mb-8">
						<GitHubCalendar username="Noway-code"/></div>
					<GitHubFeed />
				</div>
			</Section>
		</div>
	);
}
