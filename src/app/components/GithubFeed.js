import { useEffect, useState } from 'react';
import getGithubData from '../../services/github';

const GitHubFeed = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div>
			<h2>Latest GitHub Activity</h2>
			{events.length === 0 ? (
				<p>No events found.</p>
			) : (
				<ul>
					{events.map((event) => (
						<li key={event.id}>
							<p>{event.type} in {event.repo.name}</p>
							<p>{new Date(event.created_at).toLocaleString()}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default GitHubFeed;
