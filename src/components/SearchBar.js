import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../redux/noteActions";

function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchNotes = (e) => {
    setQuery(e.target.value);
    dispatch(searchNote(e.target.value));
  };

  return (
    <div className=" text-center p-2 mb-10">
      <input
        type="text"
        className=" flex-1 appearance-none border-b border-white focus:outline-none focus:ring-0 text-white  py-2 px-4   placeholder-white bg-transparent w-72"
        placeholder="Search (title) ........."
        value={query}
        onChange={searchNotes}
      />
    </div>
  );
}

export default SearchBar;
