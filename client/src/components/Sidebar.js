import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility
  let path = useLocation().pathname; // Get the current location
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-2">
      {/* Sidebar */}
      <div
        className={`fixed flex flex-col ${
          isOpen ? "w-60" : "w-20"
        } text-white shadow-md rounded-2xl`}
        style={{ backgroundColor: "#2f667f", height: "90vh" }}
      >
        {/* Toggle button to collapse sidebar */}
        <div
          className="absolute top-2 right-2 z-50 cursor-pointer"
          onClick={toggleSidebar}
        >
          {/* You can replace this div with your custom toggle icon */}
          <div className="w-8 h-8 flex items-center justify-center rounded-full">
            {isOpen && <img src="/assets/icons/hide.svg" alt="Collapse" />}
            {!isOpen && <img src="/assets/icons/hide.svg" alt="Expand" />}
          </div>
        </div>

        {/* Sidebar content */}
        <div className="flex items-center justify-center py-4 mt-10">
          <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="w-10 h-10 mr-3"
          />
          {isOpen && <h1 className="text-4xl font-semibold">Catalix</h1>}
        </div>
        <ul className="flex flex-col p-4">
          {/* Sidebar items */}
          <li className="nav-item">
            <Link
              to="/home"
              className={`flex items-center px-4 py-2 ${
                path === "/home"
                  ? "bg-sky-600 rounded-xl"
                  : "hover:bg-sky-600 hover:rounded-xl"
              }  gap-1 mt-4 `}
            >
              <img
                src="/assets/icons/home.svg"
                alt="Home"
                className="w-5 h-5 mr-3"
              />
              {isOpen && <span className="">Home</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/activities"
              className={`flex items-center px-4 py-2 ${
                path === "/activities"
                  ? "bg-sky-600 rounded-xl"
                  : "hover:bg-sky-600 hover:rounded-xl"
              }  gap-1 mt-4 `}
            >
              <img
                src="/assets/icons/activities.svg"
                alt="Activities"
                className="w-5 h-5 mr-3"
              />
              {isOpen && <span className="">Activities</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/analytics"
              className={`flex items-center px-4 py-2 ${
                path === "/analytics"
                  ? "bg-sky-600 rounded-xl"
                  : "hover:bg-sky-600 hover:rounded-xl"
              }  gap-1 mt-4 `}
            >
              <img
                src="/assets/icons/analytics.svg"
                alt="Dashboard"
                className="w-5 h-5 mr-3"
              />
              {isOpen && <span className="">Analytics</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/transformation"
              className={`flex items-center px-4 py-2 ${
                path === "/transformation"
                  ? "bg-sky-600 rounded-xl"
                  : "hover:bg-sky-600 hover:rounded-xl"
              }  gap-1 mt-4 `}
            >
              <img
                src="/assets/icons/transformation.svg"
                alt="Transformation"
                className="w-5 h-5 mr-3"
              />
              {isOpen && <span className="">Transformation</span>}
            </Link>
          </li>
          <hr className="border-1 border-blue-600 my-4" />
          <li className="nav-item">
            <Link
              to="/settings"
              className={`flex items-center px-4 py-2 ${
                path === "/settings"
                  ? "bg-sky-600 rounded-xl"
                  : "hover:bg-sky-600 hover:rounded-xl"
              }  gap-1 mt-4 `}
            >
              <img
                src="/assets/icons/settings.svg"
                alt="Settings"
                className="w-5 h-5 mr-3"
              />
              {isOpen && <span className="">Settings</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className="flex items-center px-4 py-2 hover:bg-sky-600 gap-1 mt-4 hover:rounded-xl"
            >
              <img
                src="/assets/icons/logout.svg"
                alt="Settings"
                className="w-5 h-5 mr-3"
              />
              {isOpen && <span className="">Logout</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
