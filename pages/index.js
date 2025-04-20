import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    // Task data with descriptions, icons, and categories
    const tasks = [
        { path: "/cv", image: "/task1.png", label: "CV", description: "My professional resume.", icon: "📄", category: "School Projects" },
        { path: "/task-2", image: "/colorchange.png", label: "Task-2", description: "Interactive color changer.", icon: "🎨", category: "School Projects" },
        { path: "/task-3", image: "/search.png", label: "Task-3", description: "Advanced search functionality.", icon: "🔍", category: "School Projects" },
        { path: "/task-4", image: "/grid.png", label: "Task-4", description: "Dynamic grid layout.", icon: "📊", category: "School Projects" },
        { path: "/task-5", image: "/usersearch.png", label: "Task-5", description: "User search with filters.", icon: "👤", category: "School Projects" },
        { path: "/weather", image: "/weather.png", label: "Weather", description: "Real-time weather updates.", icon: "🌤️", category: "School Projects" },
        { path: "/biydaalt", image: "/biydaalt.png", label: "Biy Daalt", description: "Task management system.", icon: "📑", category: "School Projects" },
        { path: "/ebuuhia", image: "/ebuuhia.png", label: "EBuuhia", description: "Grade calculation tool.", icon: "🧮", category: "School Projects" },
        { path: "/lab3", image: "/ss.png", label: "Mongol API", description: "Clothes search with API.", icon: "👕", category: "School Projects" },
        { path: "/lab3", image: "/mongol api.png", label: "Lab 3", description: "API integration project.", icon: "🔗", category: "School Projects" },
        { path: "/lab4", image: "/lab4.png", label: "Lab 4", description: "Advanced UI experiments.", icon: "🧪", category: "School Projects" },
        { path: "/MongolianHeritage", image: "/MongolianHeritage.png", label: "Mongolian Heritage", description: "Explore Mongolian culture.", icon: "🏞️", category: "School Projects" },
        { path: "/toki", image: "/tokilogo.png", label: "Toki", description: "Toki app landing page clone with smooth transitions and animations.", icon: "📱", category: "School Projects" },
    ];

    // Categories for filtering with Font Awesome icons
    const categories = [
        { name: "All", icon: "fa-home" },
        { name: "School Projects", icon: "fa-folder" },
        { name: "Professional", icon: "fa-user" },
        { name: "UI/UX", icon: "fa-palette" },
        { name: "Functionality", icon: "fa-cogs" },
        { name: "APIs", icon: "fa-link" },
        { name: "Tools", icon: "fa-tools" },
        { name: "Cultural", icon: "fa-globe" },
    ];

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter tasks based on search query and selected category
    const filteredTasks = tasks.filter((task) =>
        task.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "All" || task.category === selectedCategory)
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
            {/* Collapsible Sidebar */}
            <div
                className={`${
                    isSidebarExpanded ? "w-72" : "w-20"
                } bg-gray-800/20 backdrop-blur-lg p-4 border-r border-gray-700/30 fixed h-full shadow-2xl transition-all duration-300`}
            >
                {/* Profile Section */}
                <div className="flex items-center justify-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center">
                        <i className="fas fa-user text-cyan-400 text-xl"></i>
                    </div>
                    {isSidebarExpanded && (
                        <div className="ml-3">
                            <p className="text-white font-medium">Anar-Erdeme</p>
                            <p className="text-sm text-gray-400">Nest High School Student   </p>
                        </div>
                    )}
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                    className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-md p-2 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                    {isSidebarExpanded ? (
                        <i className="fas fa-chevron-left text-white text-sm"></i>
                    ) : (
                        <i className="fas fa-chevron-right text-white text-sm"></i>
                    )}
                </button>

                {/* Categories */}
                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`flex items-center justify-center ${
                                isSidebarExpanded ? "justify-start px-3" : "justify-center"
                            } p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                selectedCategory === category.name
                                    ? "bg-gray-700/50 text-cyan-400 shadow-lg"
                                    : "text-gray-400 hover:bg-gray-700/30 hover:text-white"
                            }`}
                        >
                            <i className={`fas ${category.icon} text-xl`}></i>
                            {isSidebarExpanded && (
                                <span className="text-sm font-medium ml-3">{category.name}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className={`${isSidebarExpanded ? "ml-72" : "ml-20"} flex-1 p-8 transition-all duration-300`}>
                {/* Aesthetic Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient">
                        ALL MY FRONT-END TASKS
                    </h1>
                    <p className="text-lg text-gray-400 mt-2">
                        A collection of my creative and technical projects.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full max-w-md px-4 py-2 bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-700/50 focus:border-cyan-400/50 focus:outline-none text-white placeholder-gray-500"
                    />
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredTasks.length > 0 ? (
                        filteredTasks.map((task, index) => (
                            <div
                                key={index}
                                onClick={() => router.push(task.path)}
                                className="group bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer relative"
                            >
                                {/* Glassmorphism Overlay */}
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Image Container */}
                                <div className="h-60 w-full relative">
                                    <Image
                                        src={task.image}
                                        alt={task.label}
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:opacity-50 transition-opacity duration-300"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-4">
                                    {/* Icon and Label */}
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-2xl text-cyan-400">{task.icon}</span>
                                        <p className="text-xl font-semibold text-white">
                                            {task.label}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {task.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-400">
                            No tasks found in this category.
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-gray-800/50 backdrop-blur-md border-t border-gray-700/50 p-6 text-center mt-auto">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} All Rights Reserved. Made with 🚀 by Anar-Erdene
                </p>
                <p className="text-gray-400 mt-2">
                    <a href="https://github.com/AnrErdn" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                        GitHub
                    </a> | 
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                        LinkedIn
                    </a> | 
                    <a href="mailto:g.anarerdenegantulga34@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
                        Email
                    </a>
                </p>
            </footer>
        </div>
    );
}