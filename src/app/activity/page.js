"use client";

import useAnimateOnScroll from '../components/useAnimateOnScroll';
import Section from '../components/Section';
import GitHubFeed from "../components/GithubFeed";

export default function Page() {
	useAnimateOnScroll();

	return (
		<div className="bg-gray-700 mx-auto min-h-screen flex flex-col items-start justify-center space-y-10 px-10">
			<Section className="h-screen flex flex-col justify-center" delay={200}>
				<h1 className="font-black text-6xl">Recent Activity</h1>
				<p className="text-gray-300 text-lg py-5">
					High Priority: I want a git log which occasionally fetches updates from my github, then updates and displays recent developments and projects.
					I want this to be semi-automated where I can leave it alone and it will update itself. I want to be able to click on the commit and see the changes.
					I need to learn how but I want a component thatll take in data from the site and automatically format it into a list element like
					Garrisons town list.
				</p>
				<p className="text-gray-300 text-lg">
					Medium Priority: A full activity log including the git that pulls from places like my resume and linkedin that constructs a full activity log.
					From all sorts of data sources.
				</p>
			</Section>
			<Section className="w-full">
				<div>
					<h1>Welcome to My Portfolio</h1>
					<GitHubFeed />
				</div>
			</Section>
		</div>
	);
}
