import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

type ContactPropsType = {
  img: string;
  title: string;
  telePhone: number;
  email: string;
};

const Contact = (props: ContactPropsType) => {
  return (
    <div className="border border-gray-300 rounded-lg p-3 shadow-md shadow-gray-400 w-[230px]">
      <img
        src={props.img}
        alt="dog 1"
        className="w-full h-[160px] rounded-sm"
      />
      <h1 className="text-lg font-semibold mb-2">{props.title}</h1>
      <div className="text-gray-500 flex items-center gap-2">
        <div>
          <BsFillTelephoneFill className="text-lg" />
        </div>
        <p>{props.telePhone}</p>
      </div>
      <div className="text-gray-500 flex items-center gap-2">
        <div>
          <SiGmail className="text-lg" />
        </div>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Contact;
