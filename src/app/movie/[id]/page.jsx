import MovieDetailsPage from "@/components/templates/MovieDetailsPage";
import { fetchDataById } from "@/utils/FetchData";

const MovieDetails = async ({ params }) => {
  const movieId = params.id;
  const result = await fetchDataById(movieId);

  return <MovieDetailsPage result={result} />;
};

export default MovieDetails;
