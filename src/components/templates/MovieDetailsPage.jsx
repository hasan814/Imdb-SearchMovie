import Image from "next/image";

const MovieDetailsPage = ({ result }) => {
  const {
    backdrop_path,
    poster_patch,
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count,
  } = result;
  return (
    <div className="w-full">
      <div className="p-4">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_patch
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          alt="details"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{title || name}</h2>
          <p className="text-lg mb-3 text-justify">{overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {release_date || first_air_date}
          </p>
          <p className="b-3">
            <span className="font-semibold mr-1">Rating:</span>
            {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
