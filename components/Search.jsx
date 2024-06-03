import React from 'react';

const Search = () => {
  return (
    <div className="mx-auto mt-5 w-screen max-w-screen-md py-10 leading-6">
      <form className="relative mx-auto p-2 m-2 flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
        <svg
          className="absolute left-2 block h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="name"
          name="search"
          className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
          placeholder="JobTitle,Keyword or Company:"
        />
        <button
          type="submit"
          className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg  bg-gradient-to-r from-blue-800 to-blue-500 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;