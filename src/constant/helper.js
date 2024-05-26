import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const navLinks = [
  { title: "Home", address: "/", Icon: <AiFillHome /> },
  { title: "About", address: "/about", Icon: <BsFillInfoCircleFill /> },
];

export const navbarLinks = [
  { title: "Trending", param: "fetchTrending" },
  { title: "Top Rated", param: "fetchTopRating" },
  {},
];
