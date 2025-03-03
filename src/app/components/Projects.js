import projects from '../data/projects';

const Projects = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{projects.map((project) => (
				<div
					key={project.id}
					className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
				>
					{/* Project Title and Description */}
					<div>
						<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
						<p className="text-gray-200 mb-4">{project.description}</p>
					</div>

					{/* Button always at the bottom */}
					<div className="flex flex-wrap justify-start gap-2 mt-auto">
						{project.links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								className="inline-block px-4 py-2 bg-indigo-600 text-white rounded mt-2 hover:bg-indigo-500 transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								View {link.name}
							</a>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
