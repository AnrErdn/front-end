import { useState, useEffect } from "react";

export default function Lab3() {  // Renamed the component to start with uppercase
  const [data, setData] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        if (!response.ok) { // Ensure we handle non-200 responses
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.clothes);  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array, runs once on component mount

  console.log(filteredData);

  return (
    <div className="bg-white">
      <header className="flex justify-between items-center py-6 px-24 bg-amber-500 shadow-lg text-white">
        <h1 className="text-4xl font-bold">All Mongolian Clothes</h1>
      </header>

      <div className="relative block mt-2 mx-16">
        <span className="sr-only">Search</span>
        <input
          className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Find your clothes..."
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <main className="px-4">
        <div className="grid grid-cols-3 gap-8 mx-12 my-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
            >
              <image
                className="w-full h-72 object-contain rounded-xl mb-4"
                src={item.images[0]}
                alt={item.name}
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-lg text-gray-600">{item.description}</p>
              <p className="py-2 text-gray-600">Time Period: {item.timePeriod}</p>
              <p className="py-2 text-gray-600 italic">Material: {item.materials}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
