import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaMagnifyingGlass className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search Tasks"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
      />
      {value && (
        <button
          onClick={onClearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <IoMdClose className="h-5 w-5 text-gray-400 hover:text-gray-600" />
        </button>
      )}
      <button
        onClick={handleSearch}
        className="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <span className="text-sm font-medium text-teal-600 hover:text-teal-500">
          Search
        </span>
      </button>
    </div>
  );
};

export default SearchBar;