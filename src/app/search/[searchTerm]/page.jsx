import SearchTermPage from "@/components/templates/SearchTermPage";
import { fetchSearchData } from "@/utils/FetchData";

const SearchTerm = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const results = await fetchSearchData(searchTerm);
  return <SearchTermPage results={results} />;
};

export default SearchTerm;
