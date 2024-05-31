import { useEffect, useState } from 'react';
import getGithubData from '../../services/github';

const GitHubFeed = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [displayCount, setDisplayCount] = useState(5); // Initial number of events to display
	const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event
	const [readmeContent, setReadmeContent] = useState(''); // State to store the README content

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
				setReadmeContent(content);
			} else {
				setReadmeContent('README not found.');
			}
		} catch (error) {
			setReadmeContent('Error fetching README.');
		}
	};

	const handleEventClick = (event) => {
		setSelectedEvent(event);
		fetchReadme(event.repo.name);
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
								event.payload?.commits?.map((commit) => (
									<li
										key={commit.sha}
										onClick={() => handleEventClick(event)}
										className="cursor-pointer bg-white p-4 rounded-lg shadow-md w-full"
									>
										<p className="font-semibold text-gray-700">{event.type} in {event.repo.name}</p>
										<p className="text-sm text-gray-600">{new Date(event.created_at).toLocaleString()}</p>
										<p className="text-sm text-gray-800 mt-2">Commit message: {commit.message}</p>
									</li>
								))
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
				{selectedEvent && (
					<div className="ml-4 p-4">
						<h2 className="text-2xl font-bold mb-4">README for {selectedEvent.repo.name}</h2>
						<pre className="bg-gray-800 text-gray-300 p-4 rounded-lg shadow-md overflow-x-auto">
                        {readmeContent}
            </pre>
					</div>
				)}
			</div>
		</div>
	);
};

export default GitHubFeed;
