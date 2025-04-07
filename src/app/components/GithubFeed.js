import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import getGithubData from "../../services/github";

const Spinner = ({ size = "h-6 w-6", border = "border-b-2" }) => (
    <div className={`animate-spin rounded-full ${size} ${border} border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}></div>
);

const GitHubFeed = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayCount, setDisplayCount] = useState(5);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [readmeContent, setReadmeContent] = useState("");
    const [readmeCache, setReadmeCache] = useState({});
    const [readmeLoading, setReadmeLoading] = useState(false);
    const [readmeError, setReadmeError] = useState(null);

    const fetchEvents = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getGithubData();
            if (data && data.length > 0) {
                setEvents(data);
            } else {
                setError("No events found.");
            }
        } catch (err) {
            setError("Error fetching data: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleLoadMore = () => {
        setDisplayCount((prevCount) => prevCount + 5);
    };

    const fetchReadme = async (repoFullName) => {
        const [owner, repo] = repoFullName.split("/");
        setReadmeLoading(true);
        setReadmeError(null);
        try {
            const res = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/readme`,
                {
                    headers: { Accept: "application/vnd.github.v3.raw" },
                }
            );
            if (res.ok) {
                const content = await res.text();
                setReadmeCache((prevCache) => ({ ...prevCache, [repoFullName]: content }));
                setReadmeContent(content);
            } else {
                setReadmeError("README not found.");
                setReadmeContent("");
            }
        } catch (error) {
            setReadmeError("Error fetching README.");
            setReadmeContent("");
        } finally {
            setReadmeLoading(false);
        }
    };

    const handleEventClick = async (event) => {
        if (selectedEventId === event.id) {
            setSelectedEventId(null);
            setReadmeContent("");
            setReadmeError(null);
        } else {
            setSelectedEventId(event.id);
            const repoFullName = event.repo.name;
            setReadmeError(null);
            if (readmeCache[repoFullName]) {
                setReadmeContent(readmeCache[repoFullName]);
            } else {
                await fetchReadme(repoFullName);
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center space-x-2 p-4">
                <Spinner />
                <p className="text-xl text-gray-300">Loading GitHub events...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded-md text-center">
                <p>{error}</p>
                <button
                    onClick={fetchEvents}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4 text-white">Latest GitHub Activity</h2>
                {events.length === 0 ? (
                    <p className="text-gray-300">No events found.</p>
                ) : (
                    <>
                        <ul className="space-y-4 w-full">
                            {events.slice(0, displayCount).map((event) => (
                                <div key={event.id} className="space-y-0">
                                    {event.payload?.commits ? (
                                        event.payload.commits.map((commit) => (
                                            <motion.li
                                                key={commit.sha}
                                                onClick={() => handleEventClick(event)}
                                                className={`cursor-pointer bg-white p-4 shadow-lg w-full transition rounded-lg ${
                                                    selectedEventId === event.id ? "rounded-t-lg" : ""
                                                }`}
                                                whileHover={{ scale: 1.01 }}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                <p className="font-semibold text-gray-800">
                                                    {event.type} in {event.repo.name}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {new Date(event.created_at).toLocaleString()}
                                                </p>
                                                <p className="text-md text-gray-700 mt-2">
                                                    Commit message: {commit.message}
                                                </p>
                                            </motion.li>
                                        ))
                                    ) : (
                                        <motion.li
                                            onClick={() => handleEventClick(event)}
                                            className={`cursor-pointer bg-white p-4 shadow-lg w-full transition rounded-lg ${
                                                selectedEventId === event.id ? "rounded-t-lg" : ""
                                            }`}
                                            whileHover={{ scale: 1.01 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <p className="font-semibold text-gray-800">
                                                {event.type} in {event.repo.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {new Date(event.created_at).toLocaleString()}
                                            </p>
                                            <p className="text-md text-gray-700 mt-2">
                                                No commit message available.
                                            </p>
                                        </motion.li>
                                    )}
                                    <AnimatePresence>
                                        {selectedEventId === event.id && (
                                            <motion.li
                                                key={`readme-${event.id}`}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t-2 border-indigo-500 bg-gradient-to-r from-gray-700 to-gray-800 p-4 shadow-lg w-full rounded-b-lg overflow-hidden"
                                            >
                                                <h3 className="text-xl font-semibold mb-4 text-white">
                                                    README for {event.repo.name}
                                                </h3>
                                                {readmeLoading ? (
                                                    <div className="flex items-center space-x-2">
                                                        <Spinner size="h-5 w-5" border="border-t-2" />
                                                        <p className="text-gray-300">Loading README...</p>
                                                    </div>
                                                ) : readmeError ? (
                                                    <p className="text-red-400">{readmeError}</p>
                                                ) : readmeContent ? (
                                                    <div className="prose max-w-none bg-gray-900 text-gray-200 p-4 rounded-b-lg shadow-inner overflow-x-auto">
                                                        <ReactMarkdown
                                                            remarkPlugins={[remarkGfm]}
                                                            components={{
                                                                code({ node, inline, className, children, ...props }) {
                                                                    const match = /language-(\w+)/.exec(className || "");
                                                                    return !inline && match ? (
                                                                        <SyntaxHighlighter
                                                                            style={atomDark}
                                                                            language={match[1]}
                                                                            PreTag="div"
                                                                            {...props}
                                                                        >
                                                                            {String(children).replace(/\n$/, "")}
                                                                        </SyntaxHighlighter>
                                                                    ) : (
                                                                        <code className={className} {...props}>
                                                                            {children}
                                                                        </code>
                                                                    );
                                                                },
                                                                h1: ({ node, ...props }) => (
                                                                    <h1 className="text-2xl font-bold text-gray-200" {...props} />
                                                                ),
                                                                h2: ({ node, ...props }) => (
                                                                    <h2 className="text-xl font-semibold text-gray-200" {...props} />
                                                                ),
                                                                h3: ({ node, ...props }) => (
                                                                    <h3 className="text-lg font-semibold text-gray-200" {...props} />
                                                                ),
                                                                p: ({ node, ...props }) => (
                                                                    <p className="my-2 text-gray-200" {...props} />
                                                                ),
                                                                li: ({ node, ...props }) => (
                                                                    <li className="ml-4 list-disc text-gray-200" {...props} />
                                                                ),
                                                                a: ({ node, ...props }) => (
                                                                    <a className="text-blue-400 hover:underline" {...props} />
                                                                ),
                                                                strong: ({ node, ...props }) => (
                                                                    <strong className="font-semibold text-gray-200" {...props} />
                                                                ),
                                                            }}
                                                        >
                                                            {readmeContent}
                                                        </ReactMarkdown>
                                                    </div>
                                                ) : null}
                                            </motion.li>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </ul>
                        {displayCount < events.length && (
                            <button
                                onClick={handleLoadMore}
                                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 transition"
                            >
                                Load More
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default GitHubFeed;
