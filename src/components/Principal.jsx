function Principal() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <section className="flex flex-col justify-center space-y-6">
        <h1 className="text-6xl font-extrabold">
          <span>Vite</span>
          <br />
          Next Generation <br />
          Frontend Tooling
        </h1>
        <h2 className="text-lg">
          Get ready for a development environment that can finally catch up with
          you.
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-xl text-sm font-semibold hover:bg-blue-600">
            Get Started
          </button>
          <button className="bg-gray-700 text-white px-2 py-1 rounded-xl text-sm font-semibold hover:bg-blue-600">
            Why Vite?
          </button>
          <button className="bg-gray-700 text-white px-2 py-1 rounded-xl text-sm font-semibold hover:bg-blue-600">
            View on GitHub
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-xl text-sm font-semibold hover:bg-blue-600">
            ⚡️ ViteConf 24!
          </button>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <img
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="Vite"
          className="w-full h-auto"
        />
      </section>
    </main>
  );
}

export default Principal;
