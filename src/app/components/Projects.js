import projects from '../data/projects';

const Projects = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{projects.map((project) => (
				<div
					key={project.id}
					className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
				>
					{/* Project Title and Description */}
					<div>
						<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
						<p className="text-gray-400 mb-4">{project.description}</p>
					</div>

					{/* Button always at the bottom */}
					<div className="mt-auto">
						<a
							href={project.link}
							className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors duration-300"
						>
							View on GitHub
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
