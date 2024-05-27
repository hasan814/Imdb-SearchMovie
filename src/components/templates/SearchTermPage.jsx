import { v4 as uuidv4 } from "uuid";
import Cart from "../modules/Cart";

const SearchTermPage = ({ results }) => {
  return (
    <div>
      {!results && <h1 className="text-center pt-6">No Results Found</h1>}
      {results && (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl mx-auto py-4 ">
          {results.results.map((movie) => (
            <Cart key={uuidv4()} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchTermPage;
