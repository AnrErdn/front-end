import { useState, useEffect } from "react";

export default function MongolianHeritage() {
  const [clothes, setClothes] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [historicals, setHistoricals] = useState([]);
  const [ethnics, setEthnics] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [figures, setFigures] = useState([]);
  const [tourist, setTourist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('clothes');
  const [isLoading, setIsLoading] = useState(true);

  // Filter functions
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

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchAndCheck = async (url) => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              console.warn(`Failed to fetch from ${url} - ${response.status}`);
              return {};
            }
            return response.json();
          } catch (error) {
            console.error(`Error fetching ${url}:`, error);
            return {}; // Return empty object on error
          }
        };

        // Clothes
        const clothesData = await fetchAndCheck("https://mongol-api-rest.vercel.app/clothes");
        setClothes(clothesData.clothes || []);

        // Instruments
        const instrumentsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/instruments");
        setInstruments(instrumentsData.instruments || []);

        // Historical Tools
        const historicalsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/historicaltools");
        setHistoricals(historicalsData.historicals || []);

        // Ethnic Groups
        const ethnicsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/EthnicGroups");
        setEthnics(ethnicsData.ethnicGroups || ethnicsData.ethnics || []);

        // Provinces
        const provincesData = await fetchAndCheck("https://mongol-api-rest.vercel.app/provinces");
        setProvinces(provincesData.provinces || []);

        // Historical Figures
        const figuresData = await fetchAndCheck("https://mongol-api-rest.vercel.app/HistoricalFigures");
        setFigures(figuresData.historicalFigures || figuresData.figures || []);

        // Tourist Attractions
        const touristsData = await fetchAndCheck("https://mongol-api-rest.vercel.app/TouristAttractions");
        setTourist(touristsData.touristAttractions || touristsData.tourists || []);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderActiveTabContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'clothes':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClothes.length > 0 ? filteredClothes.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  {item.images?.[0] ? (
                    <img
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-400 dark:text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.timePeriod || "Unknown period"}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.materials || "Unknown material"}
                    </span>
                  </div>
                </div>
              </div>
            )) : renderEmptyState()}
          </div>
        );
      case 'instruments':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstruments.length > 0 ? filteredInstruments.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  {item.images?.[0] ? (
                    <img
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-400 dark:text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.timePeriod || "Unknown period"}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.materials || "Unknown material"}
                    </span>
                  </div>
                </div>
              </div>
            )) : renderEmptyState()}
          </div>
        );
      case 'historicals':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHistoricals.length > 0 ? filteredHistoricals.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  {item.images?.[0] ? (
                    <img
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-400 dark:text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.usage || "Unknown usage"}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.timePeriod || "Unknown period"}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.material || "Unknown material"}
                    </span>
                  </div>
                </div>
              </div>
            )) : renderEmptyState()}
          </div>
        );
      case 'ethnics':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEthnics.length > 0 ? filteredEthnics.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  {item.images?.[0] ? (
                    <img
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-400 dark:text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      Linguistic: {item.linguistic || "Unknown"}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      Population: {item.population || "Unknown"}
                    </span>
                  </div>
                </div>
              </div>
            )) : renderEmptyState()}
          </div>
        );
      case 'provinces':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProvinces.length > 0 ? filteredProvinces.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  {item.images?.[0] ? (
                    <img
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-400 dark:text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">Area: {item.area || "Unknown"}</p>
                    <p className="text-gray-600 dark:text-gray-300">Population: {item.population || "Unknown"}</p>
                    <p className="text-gray-600 dark:text-gray-300">Capital: {item.capital || "Unknown"}</p>
                    <p className="text-gray-600 dark:text-gray-300">Soums: {item.soums || "Unknown"}</p>
                  </div>
                </div>
              </div>
            )) : renderEmptyState()}
          </div>
        );
      case 'figures':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFigures.length > 0 ? filteredFigures.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  {item.images?.[0] ? (
                    <img
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-400 dark:text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">Birth: {item.dateOfBirth || "Unknown"}</p>
                    <p className="text-gray-600 dark:text-gray-300">Origin: {item.countryOfBirth || "Unknown"}</p>
                    <p className="text-gray-600 dark:text-gray-300">Death: {item.dateOfDeath || "Unknown"}</p>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                      {item.accomplishment || "No accomplishment data"}
                    </p>
                  </div>
                </div>
              </div>
            )) : renderEmptyState()}
          </div>
        );
      case 'tourist':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTourists.length > 0 ? filteredTourists.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  {item.images?.[0] ? (
                    <img
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-400 dark:text-gray-600">No image available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {item.address ?
                        `${item.address.street || ''}, ${item.address.city || ''}, ${item.address.country || ''}, ${item.address.postalCode || ''}`
                        : "No address data"}
                    </span>
                  </div>
                </div>
              </div>
            )) : renderEmptyState()}
          </div>
        );
      default:
        return <div>Select a category to view items</div>;
    }
  };

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center col-span-full">
      <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">No items found</h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
        {searchQuery
          ? `No matches found for "${searchQuery}". Try a different search term.`
          : "We couldn't find any items in this category. Check back later!"}
      </p>
    </div>
  );

  // Tab navigation component
  const TabNavigation = () => {
    const tabs = [
      { id: 'clothes', label: 'Clothes' },
      { id: 'instruments', label: 'Instruments' },
      { id: 'historicals', label: 'Historical Tools' },
      { id: 'ethnics', label: 'Ethnic Groups' },
      { id: 'provinces', label: 'Provinces' },
      { id: 'figures', label: 'Historical Figures' },
      { id: 'tourist', label: 'Tourist Attractions' }
    ];

    return (
      <div className="scrollbar-hide overflow-x-auto">
        <div className="flex space-x-2 pb-3 border-b border-gray-200 dark:border-gray-800">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Mongolian Heritage
              </span>
            </h1>
           
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <input
                className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="Search anything..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Category Tabs */}
        <div className="mb-8">
          <TabNavigation />
        </div>

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Explore the rich cultural heritage of Mongolia
          </p>
        </div>

        {/* Content Grid */}
        {renderActiveTabContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Mongolian Heritage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}