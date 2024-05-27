"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Searchbox = () => {
  // =========== State ===========
  const [search, setSearch] = useState("");

  // =========== Router ===========
  const router = useRouter();

  // =========== Function ===========
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search/${search}`);
  };

  // =========== Rendering ===========
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default Searchbox;
