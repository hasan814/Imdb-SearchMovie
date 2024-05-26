import { v4 as uuidv4 } from "uuid";
import { fetchData } from "@/utils/FetchData";

import Cart from "@/components/modules/Cart";

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const Data = await fetchData(genre);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl mx-auto py-4 ">
      {Data.map((movie) => (
        <Cart key={uuidv4()} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
