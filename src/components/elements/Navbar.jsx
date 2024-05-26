import { navbarLinks } from "@/constant/helper";
import { v4 as uuidv4 } from "uuid";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 lg:text- justify-center gap-4 p-4">
      {navbarLinks.map((link) => (
        <NavbarItem key={uuidv4()} {...link} />
      ))}
    </div>
  );
};

export default Navbar;
