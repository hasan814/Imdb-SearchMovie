const API_KEY = process.env.API_KEY;

export const fetchData = async (genre) => {
  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10 } }
  );
  const data = await response.json();
  if (!response.ok) throw new Error("Failed to fetch Data");
  const results = data.results;
  return results;
};
