import React from "react";

const Search = () => {
  return (
    <div className="relative order-4 mt-3 flex flex-auto md:order-3 md:mt-0">
      <input
        className="flex-auto rounded-full border border-solid border-[#999] px-4 py-2"
        type="text"
        name="search"
      />
      <button className="border-l-solid absolute bottom-0 right-4 top-0 cursor-pointer border-l border-[#999] ps-2">
        <i className="material-icons cursor-pointer">search</i>
      </button>
    </div>
  );
};

export default Search;
