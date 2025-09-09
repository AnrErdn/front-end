import React from "react";
import { useState, useEffect } from "react";

export default function GOT() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading characters...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-red-400 text-xl">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    Game of Thrones Characters
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {characters.map(character => (
                        <div key={character.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                            <div className="aspect-w-3 aspect-h-4">
                                <img 
                                    src={character.imageUrl} 
                                    alt={character.fullName}
                                    className="w-full h-64 object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x400/4a5568/ffffff?text=No+Image';
                                    }}
                                />
                            </div>
                            
                            <div className="p-4">
                                <h3 className="text-white font-bold text-lg mb-2 truncate">
                                    {character.fullName}
                                </h3>
                                
                                {character.title && (
                                    <p className="text-yellow-400 text-sm mb-2 italic">
                                        {character.title}
                                    </p>
                                )}
                                
                                {character.family && (
                                    <p className="text-gray-300 text-sm mb-2">
                                        <span className="font-semibold">House:</span> {character.family}
                                    </p>
                                )}
                                
                                <div className="flex justify-between items-center text-xs text-gray-400 mt-3">
                                    <span>ID: {character.id}</span>
                                    {character.firstName && character.lastName && (
                                        <span>{character.firstName} {character.lastName}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {characters.length === 0 && !loading && (
                    <div className="text-center text-gray-400 mt-8">
                        No characters found.
                    </div>
                )}
            </div>
        </div>
    );
}