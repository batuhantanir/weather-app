import React from "react";

const Search = ({ setCityName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      setCityName(e.target[0].value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap justify-center border-b-2 pb-5 mx-3"
    >
      <input
        className="border border-black m-1 rounded text-black px-2 w-[55%]"
        type="text"
        placeholder="Search.."
      />
      <button
        className=" rounded bg-[#27374D]  px-2  m-1 hover:bg-white hover:text-[#27374D] hover:outline hover:outline-1 hover:border-[#27374D]"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
