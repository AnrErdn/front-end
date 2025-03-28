import { useState, useEffect } from "react";

export default function Lab4() {
  const [clothes, setClothes] = useState([]); 
  const [instruments, setInstruments] = useState([]);
  const [historicals, setHistoricals] = useState([]);
  const [ethnics, setEthnics] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [figures, setFigures] = useState([]);
  const [tourist, setTourist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClothes = clothes.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInstruments = instruments.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHistoricals = historicals.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEthnics = ethnics.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProvinces = provinces.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredFigures = figures.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredTourists = tourist.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchAndCheck = async (url) => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              console.warn(`Failed to fetch from ${url} - ${response.status}`);
              // Return an empty result object with the expected property
              if (url.includes("historical-tools")) return { historicals: [] };
              if (url.includes("clothes")) return { clothes: [] };
              if (url.includes("instruments")) return { instruments: [] };
              if (url.includes("ethnic-groups")) return { ethnics: [] };
              if (url.includes("provinces")) return { provinces: [] };
              if (url.includes("figures")) return { figures: [] };
              if (url.includes("tourists")) return { tourists: [] };
              return {};
            }
            return response.json();
          } catch (error) {
            console.error(`Error fetching ${url}:`, error);
            return {}; // Return empty object on error
          }
        };
    
        const clothesData = await fetchAndCheck("https://mongol-api-rest.vercel.app/clothes");
        setClothes(clothesData.clothes || []);
    
        const instrumentsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/instruments");
        setInstruments(instrumentsData.instruments || []);
    
        const historicalsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/api/historical-tools");
        setHistoricals(historicalsData.historicals || []);
    
        const ethnicsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/ethnic-groups");
        setEthnics(ethnicsData.ethnics || []);
    
        const provincesData = await fetchAndCheck("https://mongol-api-rest.vercel.app/provinces");
        setProvinces(provincesData.provinces || []);
    
        const figuresData = await fetchAndCheck("https://mongol-api-rest.vercel.app/historical-figures");
        setFigures(figuresData.figures || []);
        
        const touristsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/tourist-attractions");
        setTourist(touristsData.tourists || []);
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  console.log(clothes);
  console.log(instruments);
  console.log(historicals);
  console.log(ethnics);
  console.log(provinces);
  console.log(figures);
  console.log(tourist);

  return (
    <div className="bg-white">
      <header className="flex justify-between items-center py-6 px-24 bg-amber-500 shadow-lg text-white">
        <h1 className="text-4xl font-bold">All Mongolian THINGS</h1>
      </header>

      <div className="relative block mt-2 mx-16">
        <span className="sr-only">Search</span>
        <input
          className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Find your clothes or instruments..."
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <main className="px-4">
        {/* Clothes Section */}
        <div className="my-6 mx-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Clothes</h2>
          <div className="grid grid-cols-3 gap-8">
            {filteredClothes.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
              >
                <image
                  className="w-full h-72 object-contain rounded-xl mb-4"
                  src={item.images?.[0]}
                  alt={item.name}
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-lg text-gray-600">{item.description}</p>
                <p className="py-2 text-gray-600">Time Period: {item.timePeriod}</p>
                <p className="py-2 text-gray-600 italic">Material: {item.materials}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instruments Section */}
        <div className="my-6 mx-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Instruments</h2>
          <div className="grid grid-cols-3 gap-8">
            {filteredInstruments.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
              >
                <image
                  className="w-full h-72 object-contain rounded-xl mb-4"
                  src={item.images?.[0]}
                  alt={item.name}
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-lg text-gray-600">{item.description}</p>
                <p className="py-2 text-gray-600">Time Period: {item.timePeriod}</p>
                <p className="py-2 text-gray-600 italic">Material: {item.materials}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Tools Section */}
        <div className="my-6 mx-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Historical Tools</h2>
            <div className="grid grid-cols-3 gap-8">
                {filteredHistoricals.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
                  >
                    <image
                      className="w-full h-72 object-contain rounded-xl mb-4"
                      src={item.images?.[0]}
                      alt={item.name}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                    <p className="text-lg text-gray-600">{item.description}</p>
                    <p className="py-2 text-gray-600">Usage: {item.usage}</p>
                    <p className="py-2 text-gray-600">Time Period: {item.timePeriod}</p>
                    <p className="py-2 text-gray-600 italic">Material: {item.material}</p>
                </div>
                ))}
            </div>
        </div>
        {/* Ethnic-Groups Section */}
        <div className="my-6 mx-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ethnic Groups</h2>
            <div className="grid grid-cols-3 gap-8">
                {filteredEthnics.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
                  >
                    <image
                      className="w-full h-72 object-contain rounded-xl mb-4"
                      src={item.images?.[0]}
                      alt={item.name}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                    <p className="py-2 text-gray-600">Linguistic: {item.linguistic}</p>
                    <p className="py-2 text-gray-600 italic">Population: {item.population}</p>
                </div>
                ))}
            </div>
        </div>
        {/* Provinces Section */}
        <div className="my-6 mx-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Provinces</h2>
            <div className="grid grid-cols-3 gap-8">
                {filteredProvinces.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
                  >
                    <image
                      className="w-full h-72 object-contain rounded-xl mb-4"
                      src={item.images?.[0]}
                      alt={item.name}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                    <p className="py-2 text-gray-600">Area: {item.area}</p>
                    <p className="py-2 text-gray-600 italic">Population: {item.population}</p>
                    <p className="py-2 text-gray-600 italic">Capital: {item.capital}</p>
                    <p className="py-2 text-gray-600 italic">Soums: {item.soums}</p>
                </div>
                ))}
            </div>
        </div>
        {/* Historical Figures Section */}
        <div className="my-6 mx-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Historical Figures</h2>
            <div className="grid grid-cols-3 gap-8">
                {filteredFigures.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
                  >
                    <image
                      className="w-full h-72 object-contain rounded-xl mb-4"
                      src={item.images?.[0]}
                      alt={item.name}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                    <p className="py-2 text-gray-600">Date of birth: {item.dateOfBirth}</p>
                    <p className="py-2 text-gray-600">Country of birth: {item.countryOfBirth}</p>
                    <p className="py-2 text-gray-600">Date of death: {item.dateOfDeath}</p>
                    <p className="py-2 text-gray-600 italic">Accomplishment: {item.accomplishment}</p>
                </div>
                ))}
            </div>
        </div>
        {/* Tourist Attractions Section */}
        <div className="my-6 mx-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tourist Attractions</h2>
            <div className="grid grid-cols-3 gap-8">
                {filteredTourists.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px]"
                  >
                    <image
                      className="w-full h-72 object-contain rounded-xl mb-4"
                      src={item.images?.[0]}
                      alt={item.name}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                    <p className="text-lg text-gray-600">{item.description}</p>
                    <p className="py-2 text-gray-800 italic">Address: {item.address}</p>
                </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}