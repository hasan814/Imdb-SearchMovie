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

export const fetchDataById = async (id) => {
  console.log(id);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const fetchSearchData = async (searchTerm) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );
  const data = await response.json();
  return data;
};
