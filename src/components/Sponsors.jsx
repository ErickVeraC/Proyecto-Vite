function Sponsors() {
  return (
    <article>
      <div className="flex flex-col items-center text-white">
        <p>🤍</p>
        <p className="text-center">
          Vite is free and open source, made <br />
          possible by wonderful sponsors.
        </p>
      </div>
      <section className="w-full rounded-lg p-2 border border-[#1a1a1f]">
        <div className="text-center text-xl my-2 border font-light bg-[#202127] border-[#1a1a1f] p-1 rounded">
          Special Sponsors
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-2">
          <div className="flex justify-center items-center bg-[#202127] p-2 rounded border border-[#1a1a1f] hover:bg-white">
            <img
              src="https://vitejs.dev/stackblitz.svg"
              alt="StackBlitz"
              className="h-16 filter invert hover:filter-none cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center bg-[#202127] p-2 rounded border border-[#1a1a1f] hover:bg-white">
            <img
              src="https://vitejs.dev/nuxtlabs.svg"
              alt="NuxtLabs"
              className="h-16 filter invert hover:filter-none cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center bg-[#202127] p-2 rounded border border-[#1a1a1f] hover:bg-white">
            <img
              src="https://vitejs.dev/astro.svg"
              alt="Astro"
              className="h-16 filter invert hover:filter-none cursor-pointer"
            />
          </div>
        </div>
        <div className="text-center text-xl font-light my-2 border bg-[#202127] border-[#1a1a1f] p-1 rounded">
          Platinum Sponsors
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
          <div className="flex justify-center items-center bg-[#202127] p-2 rounded border border-[#1a1a1f] hover:bg-white">
            <img
              src="https://sponsors.vuejs.org/images/storyblok.png"
              alt="Storyblok"
              className="h-16 filter invert hover:filter-none cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center bg-[#202127] p-2 rounded border border-[#1a1a1f] hover:bg-white">
            <img
              src="https://sponsors.vuejs.org/images/bit.svg?v2"
              alt="Bit"
              className="h-16 filter invert hover:filter-none cursor-pointer"
            />
          </div>
        </div>
      </section>
      <section className="mt-12 flex flex-col sm:flex-row sm:justify-center items-center gap-3">
        <button className="rounded-full border-2 border-white text-white hover:border-red-500 hover:text-red-500 cursor-pointer py-4 px-8 text-sm">
          Sponsor Vite
        </button>
        <button className="rounded-full border-2 border-white text-white hover:border-red-500 hover:text-red-500 cursor-pointer py-4 px-8 text-sm">
          Sponsor Evan Your
        </button>
      </section>
    </article>
  );
}

export default Sponsors;
