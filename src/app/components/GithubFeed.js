import { useEffect, useState } from 'react';
import getGithubData from '../../services/github';

const GitHubFeed = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [displayCount, setDisplayCount] = useState(5); // Initial number of events to display

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

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold mb-4">Latest GitHub Activity</h2>
			{events.length === 0 ? (
				<p>No events found.</p>
			) : (
				<>
					<ul className="space-y-4 w-full">
						{events.slice(0, displayCount).map((event) => (
							<li key={event.id} className="bg-white p-4 rounded-lg shadow-md w-full">
								<p className="font-semibold text-gray-700">{event.type} in {event.repo.name}</p>
								<p className="text-sm text-gray-600">{new Date(event.created_at).toLocaleString()}</p>
							</li>
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
	);
};

export default GitHubFeed;
