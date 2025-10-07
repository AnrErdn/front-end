import { useState, useEffect } from "react";

export default function ClothesPage() {
  const API = process.env.NEXT_PUBLIC_API;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    fetch(`${API}/clothes`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setData(data.clothes || []);
        setFilteredData(data.clothes || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">MONGOL API</h1>

      {/* Search input */}
      <div className="flex justify-center mb-6 text-gray-700">
        <input
          type="text"
          placeholder="Search clothes..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col"
          >
            {item.images && item.images[0] && (
              <img 
                src={item.images[0]} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2 text-black">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-gray-800 font-medium mb-1">Time Period: {item.timePeriod}</p>
            {item.materials && (
              <p className="text-gray-500 text-sm">Materials: {item.materials.join(", ")}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
