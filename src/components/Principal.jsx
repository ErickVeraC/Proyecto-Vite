function Principal() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <section className="order-2 md:order-1 flex flex-col justify-center space-y-6">
        <h1 className="text-6xl font-extrabold">
          <span
            className="bg-gradient-to-r from-[#936afe] to-[#4ec0ff] bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(300deg, #4ec0ff, #936afe)",
            }}
          >
            Vite
          </span>
          <br />
          Next Generation <br />
          Frontend Tooling
        </h1>
        <h2 className="text-lg">
          Get ready for a development environment that can finally catch up with
          you.
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-[20%_20%_30%_30%]">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-blue-600 min-w-[100px]">
            Get Started
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-blue-600 min-w-[100px]">
            Why Vite?
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-blue-600 min-w-[150px]">
            View on GitHub
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl text-sm font-semibold hover:bg-blue-600 min-w-[150px]">
            ⚡️ ViteConf 24!
          </button>
        </div>
      </section>
      <section className="order-1 md:order-2 flex items-center justify-center relative">
        <div className="absolute w-40 h-40 bg-transparent rounded-full shadow-[0_50px_4000px_rgba(128,0,128,1),0_-50px_4000px_rgba(34,211,238,1)] z-[-0]"></div>
        <img
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="Vite"
          className="relative w-9/12 h-auto"
        />
      </section>
    </main>
  );
}

export default Principal;
