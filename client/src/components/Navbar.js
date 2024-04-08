import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-2 mt-4">
      <div className="flex flex-row justify-between items-center py-2 h-10 ">
        <div className="flex items-center">
          <form class="flex items-center max-w-lg mx-auto">
            <label for="voice-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="button"
                class="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div>
          <ul className="flex flex-row justify-start items-center gap-3 w-44">
            <li className="nav-item bg-white rounded-lg h-8 w-8 flex items-center justify-center">
              <Link to="/home">
                <img
                  src="/assets/icons/notification.svg"
                  alt="Notification"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li className="nav-item bg-white rounded-lg h-8 w-8 flex items-center justify-center">
              <Link to="/home">
                <img
                  src="/assets/icons/chat.svg"
                  alt="Chat"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li className="nav-item bg-white rounded-lg h-8 w-8 flex items-center justify-center">
              <Link to="/home">
                <img
                  src="/assets/icons/settings2.svg"
                  alt="Settings"
                  className="h-6 w-6"
                />
              </Link>
            </li>
            <li className="nav-item bg-white rounded-full h-10 w-10 flex items-center justify-center">
              <Link to="/home">
                <img
                  src="/assets/images/profile.png"
                  alt="Profile"
                  className="h-6 w-6 rounded-full"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
