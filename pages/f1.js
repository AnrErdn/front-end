import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from "recharts";

export default function F1DataVisualizer() {
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [championship, setChampionship] = useState([]);
  const [activeTab, setActiveTab] = useState("drivers");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Utility function to handle API requests
  const fetchFromAPI = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        // Fetch data from actual F1 API
        const [driversRes, teamsRes, championshipRes] = await Promise.all([
          fetchFromAPI("https://f1api.dev/api/current/drivers"),
          fetchFromAPI("https://f1api.dev/api/current/teams"),
          fetchFromAPI("https://f1api.dev/api/2025/drivers-championship")
        ]);
        
        setDrivers(driversRes.drivers || []);
        setTeams(teamsRes.teams || []);
        setChampionship(championshipRes.drivers_championship || []);
      } catch (err) {
        setError("Error fetching F1 data: " + err.message);
        console.error("Error fetching F1 data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getNationalityStats = () => {
    const stats = {};
    drivers.forEach(driver => {
      stats[driver.nationality] = (stats[driver.nationality] || 0) + 1;
    });
    return Object.entries(stats).map(([country, count]) => ({ country, count }));
  };

  const getTeamStats = () => {
    return teams.map(team => ({
      name: team.teamName,
      drivers: team.drivers || 0,
      points: team.points || 0
    }));
  };

  const getTeamChampionshipData = () => {
    return teams.map(team => ({
      name: team.teamName,
      constructors: team.constructorsChampionships || 0,
      drivers: team.driversChampionships || 0
    }));
  };

  const getChampionshipPointsData = () => {
    return championship.slice(0, 10).map(entry => ({
      driver: `${entry.driver.name} ${entry.driver.surname}`,
      shortName: entry.driver.shortName,
      points: entry.points,
      wins: entry.wins,
      team: entry.team.teamName
    }));
  };

  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe', '#00c49f', '#ffbb28', '#ff8042'];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-20 text-red-600">
          <p>{error}</p>
        </div>
      );
    }

    switch (activeTab) {
      case "drivers":
        return (
          <div className="space-y-8">
            {/* Driver Nationality Distribution */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Driver Nationality Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={getNationalityStats()}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({country, count}) => `${country}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {getNationalityStats().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Drivers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {drivers.map((driver) => (
                <div key={driver.driverId} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-800">#{driver.number}</h2>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      {driver.shortName}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {driver.name} {driver.surname}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium text-gray-600">Nationality:</span> <span className="text-gray-800">{driver.nationality}</span></p>
                    <p><span className="font-medium text-gray-600">Birthday:</span> <span className="text-gray-800">{driver.birthday}</span></p>
                    {driver.url && (
                      <a href={driver.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                        View Wikipedia →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "teams":
        return (
          <div className="space-y-8">
            {/* Team Championships Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Team Championships Comparison</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={getTeamChampionshipData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="constructors" fill="#8884d8" name="Constructors Championships" />
                    <Bar dataKey="drivers" fill="#82ca9d" name="Drivers Championships" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team) => (
                <div key={team.teamId} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{team.teamName}</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Nationality:</span>
                      <span className="font-medium text-gray-800">{team.teamNationality}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">First Appearance:</span>
                      <span className="font-medium text-gray-800">{team.firstAppeareance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Constructor Titles:</span>
                      <span className="font-bold text-blue-600">{team.constructorsChampionships || 0}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Driver Titles:</span>
                      <span className="font-bold text-green-600">{team.driversChampionships || 0}</span>
                    </div>
                    {team.url && (
                      <a href={team.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">
                        View Wikipedia →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "championship":
        return (
          <div className="space-y-8">
            {/* Championship Points Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Championship Standings - Points</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={getChampionshipPointsData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="shortName" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [value, name === 'points' ? 'Points' : 'Wins']} />
                    <Legend />
                    <Bar dataKey="points" fill="#ff6b6b" name="Points" />
                    <Bar dataKey="wins" fill="#4ecdc4" name="Wins" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Championship Standings Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">2025 Drivers Championship</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wins</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {championship.map((entry, index) => (
                      <tr key={entry.classificationId} className={index < 3 ? 'bg-yellow-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                              entry.position === 1 ? 'bg-yellow-400 text-white' :
                              entry.position === 2 ? 'bg-gray-400 text-white' :
                              entry.position === 3 ? 'bg-orange-400 text-white' :
                              'bg-gray-200 text-gray-800'
                            }`}>
                              {entry.position}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {entry.driver.name} {entry.driver.surname}
                            </div>
                            <div className="text-sm text-gray-500">{entry.driver.nationality}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {entry.team.teamName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {entry.points} pts
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {entry.wins} wins
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return <p className="text-center text-gray-500 py-20">Select a tab to view data.</p>;
    }
  };

  const TabNavigation = () => {
    const tabs = [
      { id: "drivers", label: "Drivers", icon: "🏎️" },
      { id: "teams", label: "Teams", icon: "🏁" },
      { id: "championship", label: "Championship", icon: "🏆" },
    ];

    return (
      <div className="flex flex-wrap gap-2 border-b-2 border-gray-200 pb-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-red-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Formula 1 Data Dashboard</h1>
          <p className="text-gray-600">Visualizing F1 drivers, teams, and championship data</p>
        </div>
        <TabNavigation />
        {renderContent()}
      </div>
    </div>
  );
}