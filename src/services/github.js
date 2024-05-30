import 'isomorphic-fetch';

const GITHUB_API_URL = 'https://api.github.com';
const CACHE_EXPIRATION_TIME = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

let cache = {
	timestamp: null,
	data: null,
};

const getGithubData = async () => {
	const token = process.env.GITHUB_TOKEN;
	const username = 'Noway-code';

	if (!token) {
		console.error('GitHub token is not defined');
		throw new Error('GitHub token is not defined');
	}

	// Check if the cache is valid
	const now = new Date().getTime();
	if (cache.timestamp && now - cache.timestamp < CACHE_EXPIRATION_TIME) {
		console.log('Using cached data');
		return cache.data;
	}

	const headers = {
		Authorization: `token ${token}`,
	};

	try {
		const response = await fetch(`${GITHUB_API_URL}/users/${username}/events`, { headers });
		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		}
		const data = await response.json();
		// Update cache
		cache = {
			timestamp: new Date().getTime(),
			data,
		};
		console.log('Fetched new data from GitHub');
		return data;
	} catch (error) {
		console.error('Error fetching GitHub data:', error);
		return [];
	}
};

export default getGithubData;
