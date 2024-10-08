const projects = [
	{
		id: 1,
		title: 'CreditShield',
		description: 'CreditShield is an advanced fraud detection system that leverages machine learning, synthetic data, blockchain technology to monitor real-time banking transactions, identify potential fraud, and maintain a secure, scalable ledger via blockchain! Won 1st place in the BNY challenge @ KnightHacks 24!',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/parkerblume/fraud-detection'
			},
			{
				name: 'Devpost',
				url: 'https://devpost.com/software/creditshield'
			}
		],
		images: [
			'/creditshield/pic3.jpg',
			'/creditshield/pic1.jpg',
			'/creditshield/pic2.jpg',
		],
		techStack: [
			'Python',
			'React',
			'FastAPI',
			'ML',
			'Ethereum',
			'Mongodb',
		],
	},
	{
		id: 2,
		title: 'AStarFriends',
		description: 'Efficiently carpool with your friends! Create a party, pick drivers, and set your destination. The system will optimize routes for each driver, saving you time and hassle.',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/Noway-code/astarfriends'
			}
		],
		images: [
			'/astar/selectmap.png',
			'/astar/routes.png',
			'/astar/start.png',
		],
		techStack: [
			'Python',
			'React',
			'FastAPI',
			'Google OR-Tools',
			'OSRM API',
			'SQLite',
		],
	},
	{
		id: 3,
		title: 'Pulse Pal',
		description: 'Streamlines patient records management, pre-visit screening, and doctor-patient interactions. Enables remote disease detection with rPPG technology. Won 3rd place in the Elevance Challenge @ Hacklytics 24.',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/Noway-code/pulse-pal'
			},
			{
				name: 'Devfolio',
				url: 'https://devfolio.co/projects/pulse-pal-de7c'
			}
		],
		images: [
			'pulse/web.png',
			'/pulse/lockin.png',

			'pulse/mobile.png',
		],
		techStack: [
			'Python',
			'React',
			'React Native',
			'Flask',
			'OpenCV',
			'Jupyter'
		],
	},
	{
		id: 4,
		title: 'Town Trekkr',
		description: 'Join Town Trekkr, a community-driven game where you guess photo locations, create and explore towns, and even contribute your own snapshots! Dive into the adventure!',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/parkerblume/TownTrekkr'
			}
		],
		images: [
			'/town/play.png',
			'/town/stats.png',
			'/town/webmenu.png',
		],
		techStack: [
			'React',
			'Tailwind CSS',
			'Node.js',
			'Express',
			'MongoDB',
		],
	},
	{
		id: 5,
		title: 'Portfolio',
		description: "You're looking at it! This portfolio showcases my projects & experience, and works as my personal blog. Built with Next.js, Tailwind CSS, and Vercel.",
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/Noway-code/timetocook'
			}
		],
		images: [
			'/port/obsidian.png',
			'/port/mirror.png',
		],
		techStack: [
			'React',
			'Tailwind CSS',
			'Next.js',
			'Vercel',
			'GitHub API',
			'Obsidian',
			'Cloudflare',
		],
	},
	{
		id: 6,
		title: 'Starry Knight',
		description: 'The UCF Astronomy Discord Bot, powered by Discord.js, delivers daily constellation and moon phase updates for the University of Central Florida (UCF) campus. Users can effortlessly request star charts and moon phases using intuitive slash commands.',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/Noway-code/Starry-Knight'
			}
		],
		images: [
			'/starry/bot.png',
			'/starry/moon.png',
			'/starry/stars.png',
		],
		techStack: [
			'Node.js',
			'Discord.js',
			'Astronomy API',
			'Node.js',
		],
	},
	{
		id: 7,
		title: 'Phone Home',
		description: 'Phone Home is a web-based application, offering users a space alien-themed contact management experience.',
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/Noway-code/PhoneHome'
			}
		],
		images: [
			'/phonehome/contacts.png',
			'/phonehome/login.png',
		],
		techStack: [
			'Bootstrap',
			'JS/HTML/CSS',
			'Linux',
			'Apache',
			'MySQL',
			'PHP',
			'DigitalOcean',
		],
	},
	{
		id: 8,
		title: 'Freelance - REV Group Orlando',
		description: "Developed an internal Python Tkinter GUI application to automate the process of preparing new trucks for operation, significantly improving efficiency and minimizing human error. The program leverages advanced directory manipulation and file handling to track components and automate their transfer to designated locations. In a direct comparison, the application reduced a task typically taking 10 minutes to under a minute, outperforming a senior engineer by 7 minutes.",
		images: ['/REV.png'],
		techStack: [
			'Python',
			'Tkinter',
			'Windows',
			'Pyinstaller',
		],
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/Noway-code'
			}
		]
	},
	{
		id: 9,
		title: 'dotfiles',
		description: "Not necessarily a traditional project but as a linux user (debian btw) I've spent a lot of time customizing my system and dotfiles. I've also written a few scripts to automate some tasks and make my life easier. I think they're neat and worth sharing, so here they are!",
		images: [
			'/dotfiles/rice2.png',
			'/dotfiles/rice.png',
		],
		links: [
			{
				name: 'GitHub',
				url: 'https://github.com/Noway-code/dotfiles'
			}
		],
		techStack:
			[
				'Linux',
				'Bash',
				'Vim',
				'Git',
			]
	}
];

export default projects;
