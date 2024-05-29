import React from 'react';

const Section = ({ children, className = ''}) => {
	return (
		<section
			className={`duration-1000 ease-out relative transform opacity-0 transition-all translate-y-12 ${className}`}
			data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
		>
			{children}
		</section>
	);
};

export default Section;
