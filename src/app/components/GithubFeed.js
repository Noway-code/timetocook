import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import getGithubData from '../../services/github';

const GitHubFeed = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [displayCount, setDisplayCount] = useState(5); // Initial number of events to display
	const [selectedEventId, setSelectedEventId] = useState(null); // State to store the selected event ID
	const [readmeContent, setReadmeContent] = useState(''); // State to store the README content
	const [readmeCache, setReadmeCache] = useState({}); // State to store the README cache

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const data = await getGithubData();
				if (data) {
					setEvents(data);
				} else {
					setError('No events found.');
				}
			} catch (error) {
				setError('Error fetching data.');
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	const handleLoadMore = () => {
		setDisplayCount(prevCount => prevCount + 5); // Load 5 more events
	};

	const fetchReadme = async (repoFullName) => {
		const [owner, repo] = repoFullName.split('/');
		try {
			const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
				headers: { Accept: 'application/vnd.github.v3.raw' },
			});
			if (res.ok) {
				const content = await res.text();
				setReadmeCache(prevCache => ({ ...prevCache, [repoFullName]: content }));
				setReadmeContent(content);
			} else {
				setReadmeContent('README not found.');
			}
		} catch (error) {
			setReadmeContent('Error fetching README.');
		}
	};

	const handleEventClick = async (event) => {
		setSelectedEventId(event.id);
		const repoFullName = event.repo.name;

		if (readmeCache[repoFullName]) {
			setReadmeContent(readmeCache[repoFullName]);
		} else {
			await fetchReadme(repoFullName);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className="grid grid-cols-2 gap-4">
			<div className="space-y-4">
				<h2 className="text-2xl font-bold mb-4">Latest GitHub Activity</h2>
				{events.length === 0 ? (
					<p>No events found.</p>
				) : (
					<>
						<ul className="space-y-4 w-full">
							{events.slice(0, displayCount).map((event) => (
								<div key={event.id}>
									{event.payload?.commits?.map((commit) => (
										<li
											key={commit.sha}
											onClick={() => handleEventClick(event)}
											className={`cursor-pointer bg-white p-4 shadow-md w-full ${
												selectedEventId === event.id ? 'rounded-t-lg' : 'rounded-lg'
											}`}
										>
											<p className="font-semibold text-gray-700">{event.type} in {event.repo.name}</p>
											<p className="text-sm text-gray-600">{new Date(event.created_at).toLocaleString()}</p>
											<p className="text-md text-gray-800 mt-2">Commit message: {commit.message}</p>
										</li>
									))}
									{selectedEventId === event.id && (
										<li key={`readme-${event.id}`} className="border-2 bg-gray-600 p-4 shadow-md w-full rounded-b-lg transition-opacity duration-500 ease-in-out opacity-100 animate-fadeIn">
											<h3 className="text-xl font-semibold mb-4">README for {event.repo.name}</h3>
											<div className="prose bg-gray-800 text-gray-300 p-4 rounded-b-lg shadow-md overflow-x-auto">
												<ReactMarkdown
													remarkPlugins={[remarkGfm]}
													components={{
														code({ node, inline, className, children, ...props }) {
															const match = /language-(\w+)/.exec(className || '');
															return !inline && match ? (
																<SyntaxHighlighter
																	style={atomDark}
																	language={match[1]}
																	PreTag="div"
																	{...props}
																>
																	{String(children).replace(/\n$/, '')}
																</SyntaxHighlighter>
															) : (
																<code className={className} {...props}>
																	{children}
																</code>
															);
														},
														h1: ({ node, ...props }) => <h1 className="text-2xl font-bold" {...props} />,
														h2: ({ node, ...props }) => <h2 className="text-xl font-semibold" {...props} />,
														h3: ({ node, ...props }) => <h3 className="text-lg font-semibold" {...props} />,
														p: ({ node, ...props }) => <p className="my-2" {...props} />,
														li: ({ node, ...props }) => <li className="ml-4 list-disc" {...props} />,
														a: ({ node, ...props }) => <a className="text-blue-400 hover:underline" {...props} />,
													}}
												>
													{readmeContent}
												</ReactMarkdown>
											</div>
										</li>
									)}
								</div>
							))}
						</ul>
						{displayCount < events.length && (
							<button
								onClick={handleLoadMore}
								className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
								Load More
							</button>
						)}
					</>
				)}
			</div>
			<div className="relative">
				<div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>
			</div>
		</div>
	);
};

export default GitHubFeed;
