import { v4 as uuidv4 } from "uuid";
import { navLinks } from "@/constant/helper";

import MenuBtn from "../elements/MenuBtn";
import Link from "next/link";
import DarkModeSwitch from "../modules/DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-5xl mx-auto">
      <div className="flex gap-4">
        {navLinks.map((link) => (
          <MenuBtn key={uuidv4()} link={link} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
