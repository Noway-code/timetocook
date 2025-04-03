const projects = [{
    id: 1,
    title: 'Ladybug',
    description: 'Utilizes LLM\'s and novel GUI data techniques to automate bug localization in your repositories. Integrates with GitHub to trigger analysis on new issues and provides bug localization results.',
    links: [{
        name: 'GitHub', url: 'https://github.com/Noway-code/ladybug'
    }],
    images: ['/ladybug/ppt.png', '/ladybug/red_wing.png', '/ladybug/report.png'],
    highlighted: true,
    techStack: ['Flask', 'Python', 'Node.js', 'Probot'],
}, {
    id: 2,
    title: 'TypeAlong',
    description: 'Sleek typing game that transforms EPUB books into engaging touch typing challenges, built with SvelteKit and TypeScript.',
    links: [{
        name: 'GitHub', url: 'https://github.com/noway-code/TypeAlongSvelte',
    }, {
        name: 'Blog Post', url: 'https://www.nowaycode.com/projects/typealong',
    }],
    images: ['/typealong/home-page.png', '/typealong/home-page-nord.png', '/typealong/book-toc.png', '/typealong/practice-type.png', '/typealong/themes.png'],
    techStack: ['SvelteKit', 'TypeScript', 'Node.js', 'EPUB.js', 'Python', 'Vercel'],
}, {
    id: 3,
    title: 'CreditShield',
    description: 'Advanced fraud detection system leveraging ML, synthetic data, and blockchain to secure real-time banking transactions. Winner of 1st place at KnightHacks 24.',
    links: [{
        name: 'GitHub', url: 'https://github.com/parkerblume/fraud-detection'
    }, {
        name: 'Devpost', url: 'https://devpost.com/software/creditshield'
    }],
    images: ['/creditshield/pic3.jpg', '/creditshield/pic1.jpg', '/creditshield/pic2.jpg'],
    techStack: ['Python', 'React', 'FastAPI', 'ML', 'Ethereum', 'Mongodb'],
}, {
    id: 4,
    title: 'AStarFriends',
    description: 'Effortlessly organize carpools with optimized routes. Create parties, assign drivers, and set destinations for a hassle-free ride.',
    links: [{
        name: 'GitHub', url: 'https://github.com/Noway-code/astarfriends'
    }],
    images: ['/astar/selectmap.png', '/astar/routes.png', '/astar/start.png'],
    techStack: ['Python', 'React', 'FastAPI', 'Google OR-Tools', 'OSRM API', 'SQLite'],
}, {
    id: 5,
    title: 'Pulse Pal',
    description: 'Streamlines patient management and remote disease detection using rPPG. Awarded 3rd place at Hacklytics 24 Elevance Challenge.',
    links: [{
        name: 'GitHub', url: 'https://github.com/Noway-code/pulse-pal'
    }, {
        name: 'Devfolio', url: 'https://devfolio.co/projects/pulse-pal-de7c'
    }],
    images: ['pulse/web.png', '/pulse/lockin.png', 'pulse/mobile.png'],
    techStack: ['Python', 'React', 'React Native', 'Flask', 'OpenCV', 'Jupyter'],
}, {
    id: 6,
    title: 'Town Trekkr',
    description: 'Engaging community game where you guess photo locations, build towns, and share snapshots. Dive into the adventure!',
    links: [{
        name: 'GitHub', url: 'https://github.com/parkerblume/TownTrekkr'
    }],
    images: ['/town/play.png', '/town/stats.png', '/town/webmenu.png'],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
}, {
    id: 7,
    title: 'Portfolio',
    description: 'Explore my projects and blog in this portfolio, crafted with Next.js, Tailwind CSS, and Vercel.',
    links: [{
        name: 'GitHub', url: 'https://github.com/Noway-code/timetocook'
    }],
    images: ['/port/obsidian.png', '/port/mirror.png'],
    techStack: ['React', 'Tailwind CSS', 'Next.js', 'Vercel', 'GitHub API', 'Obsidian', 'Cloudflare'],
}, {
    id: 8,
    title: 'Freelance - REV Group Orlando',
    description: 'Python Tkinter GUI that automates truck preparation, slashing task time from 10 minutes to under 1 minute and minimizing human error.',
    links: [{
        name: 'GitHub', url: 'https://github.com/Noway-code'
    }],
    images: ['/REV.png'],
    techStack: ['Python', 'Tkinter', 'Windows', 'Pyinstaller'],
}, {
    id: 9,
    title: 'Phone Home',
    description: 'Web-based contact manager with a space alien twist.',
    links: [{
        name: 'GitHub', url: 'https://github.com/Noway-code/PhoneHome'
    }],
    images: ['/phonehome/contacts.png', '/phonehome/login.png'],
    techStack: ['Bootstrap', 'JS/HTML/CSS', 'Linux', 'Apache', 'MySQL', 'PHP', 'DigitalOcean'],
}, {
    id: 10,
    title: 'dotfiles',
    description: 'A curated collection of custom Linux dotfiles and automation scripts that boost system efficiency.',
    links: [{
        name: 'GitHub', url: 'https://github.com/Noway-code/dotfiles'
    }],
    images: ['/dotfiles/rice0.png', '/dotfiles/rice2.png', '/dotfiles/rice.png'],
    techStack: ['Bash', 'Neovim', 'Git', 'Linux', 'Arch', 'btw']
}];

export default projects;
