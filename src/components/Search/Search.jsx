import React from "react";

const Search = ({setCityName}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(e.target[0].value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="border border-black" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
