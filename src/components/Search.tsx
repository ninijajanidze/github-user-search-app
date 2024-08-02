import React, { useState } from "react";
import SearchIcon from "/images/icon-search.svg";

interface SearchProps {
  isNightMode: boolean;
  onSearch: (username: string) => void;
  error: string | null;
}

const Search: React.FC<SearchProps> = ({
  isNightMode,
  onSearch,
  error,
}) => {
  const [search, setSearch] = useState<string>(
    "ninijajanidze"
  );

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div
      className={`flex items-center w-[327px] h-[60px] pt-[6.5px] pr-[7px] pb-[7.5px] pl-[16px] hover:cursor-pointer rounded-[15px]
      md:w-[730px] md:h-[69px] md:pt-[9.5px] md:pr-[10px] md:pl-[32px]
      ${
        isNightMode
          ? "bg-[#1e2a47]"
          : "bg-[#fefefe] [box-shadow:0_16px_30px_-10px_rgba(70,_96,_187,_0.2)]"
      }`}
    >
      <img
        src={SearchIcon}
        alt="search icon"
        className="w-[17.7px] h-[17.6px] mr-[13px] md:w-[24px] md:h-[24px] md:mr-[29px]"
      />
      <input
        className={`w-[184px] h-[25px] text-[13px] placeholder-[#4b6a9b] border-none focus:outline-none md:w-[245px] ${
          isNightMode
            ? "bg-[#1e2a47] placeholder-[#ffffff] text-white"
            : "bg-[#fefefe]"
        }`}
        type="text"
        onChange={(event) =>
          setSearch(event.target.value)
        }
        placeholder="Search GitHub username…"
      />
      {error && (
        <p className="absolute text-[#f74646] text-[12px] font-bold ml-[140px] md:text-[15px] md:ml-[460px]">
          {error}
        </p>
      )}
      <button
        onClick={handleSearch}
        className="w-[84px] h-[46px] bg-[#0079ff] rounded-[10px] text-white text-[14px] ml-[7px] font-bold
        md:ml-[280px] md:w-[106px] md:h-[50px] hover:bg-[#60abff]"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
