import { v4 as uuidv4 } from "uuid";
import { fetchData } from "@/utils/FetchData";

import Cart from "@/components/modules/Cart";

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  console.log(genre);
  const Data = await fetchData(genre);
  return (
    <div>
      {Data.map((movie) => (
        <Cart key={uuidv4()} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
