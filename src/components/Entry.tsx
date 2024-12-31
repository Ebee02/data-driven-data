import locationPin from "../assets/images/location-pin.png";

type EntryPropsType = {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  dates: string;
  googleMapsLink: string;
  text: string;
  country: string;
};

const Entry = (props: EntryPropsType) => {
  return (
    <section className="flex items-center gap-x-6 border-b-2 border-gray-300 pb-8 ">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="w-[240px] h-[280px] col-span-2 shadow-sm rounded-lg"
      />

      <div className="w-full">
        <div className="mt-2">
          <span className="flex items-center jusify-center">
            <img
              src={locationPin}
              alt="location pin"
              className="h-4 mr-[6px]"
            />
            <p className="text-sm uppercase tracking-[0.3em] text-gray-700">
              {props.country}
            </p>

            <a
              href={props.googleMapsLink}
              className="ml-5 text-sm text-gray-400 font-medium transition-all duration-300 hover:underline"
            >
              View on Google Maps
            </a>
          </span>
        </div>
        <h1 className="text-black font-semibold text-4xl mt-2">
          {props.title}
        </h1>
        <p className="text-lg font-bold trackin-wide mt-8">{props.dates}</p>
        <p className="w-[80%] font-medium text-sm leading-5 tracking-wide text-slate-600">
          {props.text}
        </p>
      </div>
    </section>
  );
};
export default Entry;
