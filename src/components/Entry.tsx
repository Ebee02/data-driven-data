const Entry = () => {
  return (
    <section className="flex items-center gap-x-6 border-b-2 border-gray-300 pb-8 ">
      <img
        src="/src/assets/images/Rectangle-77.png"
        alt="mount fuji"
        className="w-[280px] h-[280px] col-span-2 "
      />

      <div className=" w-full">
        <div className="mt-2">
          <span className="flex items-center jusify-center">
            <img
              src="/src/assets/images/location-pin.png"
              alt="location pin"
              className="h-4 mr-[6px]"
            />
            <p className="text-sm uppercase tracking-[0.3em] text-gray-700">
              japan
            </p>

            <a
              href="#"
              className="ml-5 text-sm text-gray-400 transition-all duration-300 hover:underline"
            >
              View on Google Maps
            </a>
          </span>
        </div>
        <h1 className="text-black font-semibold text-4xl mt-2">Mount Fuji</h1>
        <p className="text-lg font-semibold trackin-wide mt-8">
          12 Jan, 2021 - 24 Jan, 2021
        </p>
        <p className="w-[80%] font-medium text-sm leading-5 tracking-wide text-slate-600">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  );
};
export default Entry;
