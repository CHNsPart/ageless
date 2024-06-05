import { MdOutlineSportsGymnastics } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiBiceps } from "react-icons/gi";

export default function Card() {
  return (
    <div className="flex justify-center items-center w-full gap-2">
        <div className="flex flex-col justify-center h-fit gap-5 md:h-[344px] md:w-[366px] bg-primary p-4 text-center rounded-md">
            <MdOutlineSportsGymnastics className="size-20 w-full" />
            <h2 className="text-xl w-full text-center font-bold text-white">Title</h2>
            <p className="text-sm text-muted">Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh </p>
        </div>
        <div className="flex flex-col justify-center h-fit gap-5 md:h-[344px] md:w-[366px] bg-primary/50 p-4 text-center rounded-md">
            <CgGym className="size-20 w-full" />
            <h2 className="text-xl w-full text-center font-bold text-[#7C0026]">Title</h2>
            <p className="text-sm text-[#7C0026]">Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh </p>
        </div>
        <div className="flex flex-col justify-center h-fit gap-5 md:h-[344px] md:w-[366px] bg-primary/50 p-4 text-center rounded-md">
            <GiBiceps className="size-20 w-full" />
            <h2 className="text-xl w-full text-center font-bold text-[#7C0026]">Title</h2>
            <p className="text-sm text-[#7C0026]">Lorem ipsum dolor sit amet consectetur. Luctus dis faucibus nulla velit amet nibh </p>
        </div>
    </div>
  );
}
