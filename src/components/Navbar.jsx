function Navbar() {
  return (
    <nav className="bg-[#1a1a1f] z-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://vitejs.dev/logo.svg"
                alt="Vite"
              />
            </div>
            <h4 className="ml-3 text-white">Vite</h4>

            <div className="relative flex items-center bg-gray-700 text-white rounded-md ml-6">
              <svg
                className="h-5 w-5 ml-2 text-gray-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.65 10.75a6 6 0 10-12 0 6 6 0 0012 0z"
                ></path>
              </svg>
              <input
                type="search"
                placeholder="Search"
                className="bg-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              />
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4 sm:ml-auto z-[-0]">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Guide
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Config
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Plugins
            </a>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </a>
              <div className="absolute hidden group-hover:block bg-gray-800 border border-gray-700 rounded-md mt-2">
                <select className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm">
                  <option>Team</option>
                  <option>Blog</option>
                  <option>Releases</option>
                </select>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Version
              </a>
              <div className="absolute hidden group-hover:block bg-gray-800 border border-gray-700 rounded-md mt-2">
                <select className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm">
                  <option>Vite 4 Docs</option>
                  <option>Vite 3 Docs</option>
                  <option>Vite 2 Docs</option>
                </select>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                ...
              </a>
              <div className="absolute hidden group-hover:block bg-gray-800 border border-gray-700 rounded-md mt-2">
                <select className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm">
                  <option>English</option>
                  <option>Japanese</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Portuguese</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="flex items-center justify-between px-2 pb-3 pt-2">
          <div className="relative flex items-center bg-gray-700 text-white rounded-md">
            <svg
              className="h-5 w-5 ml-2 text-gray-400 hover:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 10.75a6 6 0 10-12 0 6 6 0 0012 0z"
              ></path>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            />
          </div>
          <select className="ml-2 bg-gray-700 text-white px-3 py-2 rounded-md text-sm">
            <option>...</option>
          </select>
        </div>
        <div className="space-y-1 px-2 pb-3 pt-2 border-t border-white">
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Guide
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Config
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Plugins
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Resources
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Version
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            English
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
