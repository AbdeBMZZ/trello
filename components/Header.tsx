"use client";
import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row p-5 bg-gray-500/10 items-center">
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-96
            bg-gradient-to-br
            from-purple-400
            to-[#0055D1]
            rounded-md
            filter
            blur-3xl
            opacity-50
            -z-50
            "
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/fr/c/c1/Logo_Trello.svg"
          alt="trello image"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          <Avatar name="abdellah boumaiza" round color="#0055D1" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-10 w-10 mr-1 text-[#0055D1]" />
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
