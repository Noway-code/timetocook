import icons from "@/app/data/icons";

export default function SkillsSection() {
    return (
        <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">
                    My Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {icons.map((icon, index) => (
                        <div
                            key={icon.name}
                            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-md transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                        >
                            <img
                                src={icon.url}
                                alt={icon.name}
                                className="w-16 h-16 object-contain"
                            />
                            <p className="mt-2 text-white text-lg font-semibold">
                                {icon.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}