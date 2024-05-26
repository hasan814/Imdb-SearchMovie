import Link from "next/link";

const MenuBtn = ({ link }) => {
  const { title, address, Icon } = link;
  return (
    <Link href={address} className="hover:text-amber-500">
      <div className="text-2xl sm:hidden">{Icon}</div>
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuBtn;
