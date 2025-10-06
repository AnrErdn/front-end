import React from "react";
import { useState, useEffect } from "react";
import starkLogo from '../public/G-Stark.png';
import lannisterLogo from '../public/G-Lannister.png';
import targaryenLogo from '../public/G-Targaeryan.png';
import baratheonLogo from '../public/G-Baratheon.png';
import greyjoyLogo from '../public/G-Greyjoy.png';
import tyrellLogo from '../public/G-Tyrell.png';
import martellLogo from '../public/G-Martell.png';
import tullyLogo from '../public/G-Tully.png';
import Image from "next/image";


export default function GOT() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedHouse, setSelectedHouse] = useState("All");
    const [selectedSeason, setSelectedSeason] = useState(1);
    const [scrollY, setScrollY] = useState(0);
    const [visibleSections, setVisibleSections] = useState(new Set());
    
    // House data with colors, logos, and descriptions
    const houseData = {
        "House Stark": {
            color: "from-[#F2F2F2]",
            motto: "Winter is Coming",
            description: "The honorable rulers of the North, known for their integrity and strong family bonds.",
            logo: starkLogo,
            seat: "Winterfell",
            region: "The North"
        },
        "House Lannister": {
            color: "from-[#760000]",
            motto: "Hear Me Roar",
            description: "The wealthy lords of Casterly Rock, known for their cunning and political prowess.",
            logo: lannisterLogo,
            seat: "Casterly Rock",
            region: "The Westerlands"
        },
        "House Targaryen": {
            color: "from-[#0B0B0B]",
            motto: "Fire and Blood",
            description: "The dragon lords who conquered Westeros, masters of fire and ancient magic.",
            logo: targaryenLogo,
            seat: "Dragonstone",
            region: "Crownlands"
        },
        "House Baratheon": {
            color: "from-[#F1C232]",
            motto: "Ours is the Fury",
            description: "The stormlords known for their strength in battle and fierce determination.",
            logo: baratheonLogo,
            seat: "Storm's End",
            region: "The Stormlands"
        },
        "House Greyjoy": {
            color: "from-[#0B0B0B]",
            motto: "We Do Not Sow",
            description: "The ironborn raiders of the Iron Islands, masters of the seas.",
            logo: greyjoyLogo,
            seat: "Pyke",
            region: "Iron Islands"
        },
        "House Tyrell": {
            color: "from-[#4C860D]",
            motto: "Growing Strong",
            description: "The lords of the Reach, wealthy and powerful through their fertile lands.",
            logo: tyrellLogo,
            seat: "Highgarden",
            region: "The Reach"
        },
        "House Martell": {
            color: "from-[#FF8417]",
            motto: "Unbowed, Unbent, Unbroken",
            description: "The proud princes of Dorne, known for their fierce independence.",
            logo: martellLogo,
            seat: "Sunspear",
            region: "Dorne"
        },
        "House Tully": {
            color: "from-[#00306E]",
            motto: "Family, Duty, Honor",
            description: "The riverlords who value family above all else.",
            logo: tullyLogo,
            seat: "Riverrun",
            region: "The Riverlands"
        }
    };

    // Seasons data with episodes and ratings
    const seasonsData = [
        { season: 1, episodes: 10, rating: 9.0, year: 2011, description: "Eddard Stark becomes Hand of the King" },
        { season: 2, episodes: 10, rating: 8.8, year: 2012, description: "The War of Five Kings begins with Greatest battle" },
        { season: 3, episodes: 10, rating: 9.2, year: 2013, description: "The Red Wedding shocks the realm" },
        { season: 4, episodes: 10, rating: 9.1, year: 2014, description: "Tyrion's trial and the Battle at Castle Black" },
        { season: 5, episodes: 10, rating: 8.5, year: 2015, description: "Jon Snow becomes Lord Commander" },
        { season: 6, episodes: 10, rating: 9.0, year: 2016, description: "The Battle of the Bastards GOT Greatest" },
        { season: 7, episodes: 7, rating: 8.7, year: 2017, description: "Daenerys arrives in Westeros with his army" },
        { season: 8, episodes: 6, rating: 8.4, year: 2019, description: "The final battle for the Iron Throne in Westeros" }
    ];

    // Related series and movies
    const relatedContent = [
        {
            title: "House of the Dragon",
            type: "TV Series",
            year: "2022-present",
            rating: 8.5,
            description: "The Targaryen civil war known as the Dance of Dragons",
            status: "Ongoing"
        },
        {
            title: "Tales of Dunk and Egg",
            type: "Upcoming Series",
            year: "2024",
            rating: "TBA",
            description: "Adventures of Ser Duncan the Tall and Prince Aegon",
            status: "In Development"
        },
        {
            title: "10,000 Ships",
            type: "Upcoming Series", 
            year: "TBA",
            rating: "TBA",
            description: "Princess Nymeria's journey to Dorne",
            status: "In Development"
        },
        {
            title: "The Hedge Knight",
            type: "Upcoming Movie",
            year: "TBA", 
            rating: "TBA",
            description: "Dunk and Egg animated feature film",
            status: "Announced"
        }
    ];
    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://thronesapi.com/api/v2/Characters");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCharacters(data);
            } catch (error) {
                console.error("Error fetching Game of Thrones characters:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);

    // Scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            
            // Check which sections are visible
            const sections = ['hero', 'stats', 'houses', 'seasons', 'characters', 'related'];
            const newVisible = new Set();
            
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.8) {
                        newVisible.add(section);
                    }
                }
            });
            
            setVisibleSections(newVisible);
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const houses = ["All", ...Object.keys(houseData)];
    const filteredCharacters = selectedHouse === "All" 
        ? characters 
        : characters.filter(char => char.family === selectedHouse);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-8">
                        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
                        <div className="absolute inset-2 border-4 border-white/10 rounded-full"></div>
                        <div className="absolute inset-2 border-4 border-transparent border-t-white/50 rounded-full animate-spin animation-delay-150"></div>
                    </div>
                    <p className="text-white/60 text-xl font-light animate-pulse">Entering the Seven Kingdoms...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white overflow-hidden">
            {/* Enhanced Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <img src="GOT logo.png" alt="Game of Thrones Logo" className="h-20" />
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'Houses', 'Seasons', 'Characters', 'Universe'].map((item, index) => (
                                <a 
                                    key={item}
                                    href={`#${item.toLowerCase()}`} 
                                    className="text-white/70 hover:text-white transition-all duration-300 text-sm font-medium relative group"
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Enhanced Hero Section */}
            <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div 
                        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"
                        style={{
                            transform: `translateY(${scrollY * 0.3}px)`,
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                </div>
                
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <img src="second.svg" alt="Game of Thrones Logo" className=" mx-auto mb-4" />
                    <p className="text-2xl md:text-3xl text-white/70 font-light mb-4 animate-fadeInUp animation-delay-300">
                        The Complete Universe
                    </p>
                    <p className="text-lg text-white/50 font-light mb-12 animate-fadeInUp animation-delay-500">
                        8 Seasons • 73 Episodes • Infinite Legacy
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-700">
                        <button 
                            className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            onClick={() => document.getElementById('characters').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Characters
                        </button>
                        <button 
                            className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                            onClick={() => document.getElementById('houses').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Great Houses
                        </button>
                    </div>
                </div>

                {/* Floating elements */}
                <img src='G-Targaeryan.png' alt="Targaryen" className="absolute top-1/4 left-[2%] animate-float h-[65%]"/>
                <img src='G-Stark.png' alt="Stark" className="absolute top-1/4 right-10 animate-float h-64" />
                <img src='G-Lannister.png' alt="Lannister" className="absolute bottom-[12%] right-12 left-[75%] h-56 animate-float animation-delay-1000" />
            </section>

            {/* Enhanced Stats Section */}
            <section id="stats" className="py-32 bg-gradient-to-b from-transparent to-gray-900/30 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-thin mb-6 animate-slideInFromBottom">
                            By the Numbers
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "8", label: "Epic Seasons", icon: "📺" },
                            { number: "73", label: "Episodes", icon: "🎬" },
                            { number: characters.length, label: "Characters", icon: "👥" },
                            { number: "9.2", label: "Peak IMDB Rating", icon: "⭐" }
                        ].map((stat, index) => (
                            <div 
                                key={index}
                                className={`text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 ${
                                    visibleSections.has('stats') ? 'animate-slideInFromBottom' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-thin mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-white/60 font-light">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Great Houses Section */}
            <section id="houses" className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className={`text-5xl md:text-6xl font-thin mb-6 ${visibleSections.has('houses') ? 'animate-slideInFromBottom' : 'opacity-0'}`}>
                            The Great Houses
                        </h2>
                        <p className={`text-xl text-white/60 font-light max-w-3xl mx-auto ${visibleSections.has('houses') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`}>
                            Noble bloodlines that have shaped the Seven Kingdoms through centuries of power, war, and legacy
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(houseData).map(([houseName, house], index) => (
                            <div
                                key={houseName}
                                className={`group cursor-pointer transition-all duration-700 ${
                                    visibleSections.has('houses') ? 'animate-slideInFromLeft' : 'opacity-0 translate-x-[-50px]'
                                }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                                onClick={() => setSelectedHouse(houseName)}
                            >
                                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${house.color} transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl overflow-hidden`}>
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Image src={house.logo} alt={`${houseName} logo`} width={40} height={30} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">
                                            {houseName.replace('House ', '')}
                                        </h3>
                                        <p className="text-white/90 font-medium mb-3 italic">
                                            {house.motto}
                                        </p>
                                        <p className="text-white/80 text-sm mb-4 leading-relaxed">
                                            {house.description}
                                        </p>
                                        <div className="space-y-1 text-xs text-white/70">
                                            <div><strong>Seat:</strong> {house.seat}</div>
                                            <div><strong>Region:</strong> {house.region}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seasons & Episodes Section */}
            <section id="seasons" className="py-32 bg-gradient-to-b from-gray-900/30 to-transparent">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className={`text-5xl md:text-6xl font-thin mb-6 ${visibleSections.has('seasons') ? 'animate-slideInFromBottom' : 'opacity-0'}`}>
                            Epic Seasons
                        </h2>
                        <p className={`text-xl text-white/60 font-light ${visibleSections.has('seasons') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`}>
                            Eight legendary seasons that redefined television
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {seasonsData.map((season, index) => (
                            <div
                                key={season.season}
                                className={`group cursor-pointer ${
                                    visibleSections.has('seasons') ? 'animate-slideInFromBottom' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => setSelectedSeason(season.season)}
                            >
                                <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-xl ${
                                    selectedSeason === season.season 
                                        ? 'border-white/30 bg-white/10' 
                                        : 'border-white/10 group-hover:border-white/20'
                                }`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-3xl font-thin">Season {season.season}</div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-yellow-400">⭐</span>
                                            <span className="text-lg font-medium">{season.rating}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-sm text-white/70">
                                        <div><strong>{season.episodes} Episodes</strong> • {season.year}</div>
                                        <p className="text-white/60 leading-relaxed">{season.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Characters Section */}
            <section id="characters" className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className={`text-5xl md:text-6xl font-thin mb-6 ${visibleSections.has('characters') ? 'animate-slideInFromBottom' : 'opacity-0'}`}>
                            Legendary Characters
                        </h2>
                        <p className={`text-xl text-white/60 font-light mb-8 ${visibleSections.has('characters') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`}>
                            {selectedHouse === 'All' ? 'Heroes and villains who shaped Westeros' : `Members of ${selectedHouse}`}
                        </p>
                        
                        {/* House filter buttons */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {houses.map((house, index) => (
                                <button
                                    key={house}
                                    onClick={() => setSelectedHouse(house)}
                                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                        selectedHouse === house
                                            ? 'bg-white text-black shadow-lg'
                                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                    } ${visibleSections.has('characters') ? 'animate-fadeInUp' : 'opacity-0'}`}
                                    style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                                >
                                    {house === "All" ? "All Houses" : house.replace("House ", "")}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredCharacters.slice(0, 16).map((character, index) => (
                            <div
                                key={character.id}
                                className={`group cursor-pointer ${
                                    visibleSections.has('characters') ? 'animate-slideInFromBottom' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 transform group-hover:scale-105 group-hover:shadow-2xl">
                                    <div className="aspect-[3/4] relative overflow-hidden">
                                        <img
                                            src={character.imageUrl}
                                            alt={character.fullName}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/300x400/111111/666666?text=No+Image';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        
                                        {/* Animated overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h3 className="text-xl font-medium mb-2 group-hover:text-white/90 transition-colors">
                                            {character.fullName}
                                        </h3>
                                        
                                        {character.title && (
                                            <p className="text-yellow-400/80 text-sm mb-3 font-light italic">
                                                {character.title}
                                            </p>
                                        )}
                                        
                                        {character.family && (
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                                                houseData[character.family]?.color || 'from-gray-500 to-gray-700'
                                            } text-white`}>
                                                {character.family.replace('House ', '')}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Universe Content */}
            <section id="related" className="py-32 bg-gradient-to-b from-gray-900/30 to-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className={`text-5xl md:text-6xl font-thin mb-6 ${visibleSections.has('related') ? 'animate-slideInFromBottom' : 'opacity-0'}`}>
                            Extended Universe
                        </h2>
                        <p className={`text-xl text-white/60 font-light ${visibleSections.has('related') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`}>
                            Explore more stories from the world of Westeros and beyond
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {relatedContent.map((content, index) => (
                            <div
                                key={index}
                                className={`group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 ${
                                    visibleSections.has('related') ? 'animate-slideInFromLeft' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                                            {content.title}
                                        </h3>
                                        <div className="flex items-center space-x-4 text-sm text-white/60">
                                            <span className="bg-white/10 px-3 py-1 rounded-full">{content.type}</span>
                                            <span>{content.year}</span>
                                            {content.rating !== 'TBA' && (
                                                <div className="flex items-center space-x-1">
                                                    <span className="text-yellow-400">⭐</span>
                                                    <span>{content.rating}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        content.status === 'Ongoing' ? 'bg-green-500/20 text-green-400' :
                                        content.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                                        'bg-yellow-500/20 text-yellow-400'
                                    }`}>
                                        {content.status}
                                    </div>
                                </div>
                                <p className="text-white/70 leading-relaxed">
                                    {content.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Footer */}
            <footer className="py-16 border-t border-white/10 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-8">
                        <img src="GOT logo.png" alt="Game of Thrones Logo" className="h-12 mx-auto mb-4" />
                        <p className="text-white-60 max-w-2xl mx-auto" >
                            &quot;A mind needs books as a sword needs a whetstone, if it is to keep its edge.&quot; - Tyrion Lannister
                        </p>
                    </div>
                    <div className="text-center text-white/40 text-sm">
                        © 2024 Game of Thrones Universe. All rights reserved. | Data from Thrones API
                    </div>
                </div>
            </footer>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideInFromBottom {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideInFromLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-slideInFromBottom {
                    animation: slideInFromBottom 0.8s ease-out forwards;
                }
                
                .animate-slideInFromLeft {
                    animation: slideInFromLeft 0.8s ease-out forwards;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animation-delay-150 {
                    animation-delay: 0.15s;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                .animation-delay-700 {
                    animation-delay: 0.7s;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
        );
    }   