import { useEffect } from 'react';

const useAnimateOnScroll = () => {
	useEffect(() => {
		const handleIntersection = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const replacer = entry.target;
					const replaceClasses = JSON.parse(replacer.dataset.replace.replace(/'/g, '"'));
					Object.keys(replaceClasses).forEach((key) => {
						replacer.classList.remove(key);
						replacer.classList.add(replaceClasses[key]);
					});
					observer.unobserve(replacer); // Stop observing once animated
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		const replacers = document.querySelectorAll('[data-replace]');
		replacers.forEach((replacer) => {
			observer.observe(replacer);
		});

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, []);
};

export default useAnimateOnScroll;
