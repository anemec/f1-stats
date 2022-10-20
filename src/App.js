import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex h-full bg-gray-200 text-gray-700">
      <div className="w-64 bg-slate-400 h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="h-20">
          <Navbar />
        </div>
        {/* BrowserRouter */}
        <Home />
      </div>
    </div>
  );
}

export default App;
