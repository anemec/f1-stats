import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex h-fit overflow-auto">
      <div id="sidebar" className="max-w-xs w-1/4 h-screen bg-slate-300">
        <div className="p-4 mb-8">Sidebar</div>
        <nav className="p-4">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={`drivers`}>Drivers</Link>
            </li>
            <li>
              <Link to={``}>Constructors</Link>
            </li>
            <li>
              <Link to={``}>Seasons</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" className="bg-slate-600 w-full p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
