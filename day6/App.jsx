function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-3">
          Travel Explorer
        </h1>

        <p className="text-gray-600 mb-6">
          Discover beautiful places and plan your next journey.
        </p>

        <div className="bg-blue-50 rounded-xl p-5 mb-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Explore Maharashtra
          </h2>

          <p className="text-gray-600 mb-4">
            Visit historical forts, hill stations and beautiful
            destinations.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Explore Now
          </button>
        </div>

        <div className="flex justify-center gap-4 text-sm text-gray-500">
          <span>🏔️ Hill Stations</span>
          <span>🏰 Forts</span>
        </div>

      </div>
    </div>
  );
}

export default App;
