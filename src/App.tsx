import { useEffect, useState } from "react";
import Moon from "/images/icon-moon.svg";
import Sun from "/images/icon-sun.svg";
import Search from "./components/Search";
import User from "./components/User";
export interface UserType {
  name: string | null;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  company: string | null;
  twitter_username: string | null;
}

function App() {
  const [user, setUser] =
    useState<UserType | null>(null);
  const [isNightMode, setIsNightMode] =
    useState<boolean>(false);
  const [error, setError] = useState<
    string | null
  >(null);

  const toggleTheme = (): void => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    getUser("ninijajanidze");
  }, []);

  const getUser = async (username: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );
      const jsonData = await response.json();
      if (response.ok) {
        setUser(jsonData);
        setError(null);
      } else {
        setUser(null);
        setError("No results");
      }
    } catch (error) {
      setUser(null);
      setError("An error occurred");
    }
  };

  return (
    <div
      className={`pt-[31px] pr-[24px] pb-[79px] pl-[24px] 
      md:w-[1440px] md:h-[900px] md:py-[144px] md:px-[355px] ${
        isNightMode
          ? "bg-[#141d2f]"
          : "bg-[#f6f8ff]"
      }`}
    >
      <header className="flex items-center mb-[36px]">
        <h1
          className={`text-[26px] font-bold mr-[123px] text-[#222731] md:mr-[526px] ${
            isNightMode
              ? "text-white mr-[112px] md:mr-[516px]"
              : "text-[#222731]"
          }`}
        >
          devfinder
        </h1>
        <p
          className={`text-[13px] font-bold tracking-[2.5px] mr-[16px] ${
            isNightMode
              ? "text-[#ffffff]"
              : "text-[#4b6a9b]"
          }`}
        >
          {isNightMode ? "LIGHT" : "DARK"}
        </p>
        <img
          src={isNightMode ? Sun : Moon}
          alt="toggle icon"
          onClick={toggleTheme}
          className="cursor-pointer"
        />
      </header>
      <Search
        isNightMode={isNightMode}
        onSearch={getUser}
        error={error}
      />
      <User
        user={user}
        isNightMode={isNightMode}
      />
    </div>
  );
}

export default App;
