import React from "react";
import { format } from "date-fns";
import LocationIcon from "/images/icon-location.svg";
import WebsiteIcon from "/images/icon-website.svg";
import TwitterIcon from "/images/icon-twitter.svg";
import CompanyIcon from "/images/icon-company.svg";
import { UserType } from "../App";

interface UserProps {
  user: UserType | null;
  isNightMode: boolean;
}

const User: React.FC<UserProps> = ({
  user,
  isNightMode,
}) => {
  return (
    <div
      className={`w-[327px] rounded-[15px] mt-[16px] pt-[32px] px-[24px] pb-[48px]
      md:w-[730px] md:pt-[44px] md:px-[48px] md:pb-[42px] ${
        isNightMode
          ? "bg-[#1e2a47]"
          : "bg-[#fefefe] [box-shadow:0_16px_30px_-10px_rgba(70,_96,_187,_0.2)]"
      }`}
    >
      <div className="flex md:w-full">
        <img
          src={user?.avatar_url}
          alt="user image"
          className="w-[70px] h-[70px] rounded-[50%] mr-[20px] md:w-[117px] md:h-[117px] md:mr-[37px]"
        />

        <div className="flex flex-col md:w-full md:h-[60px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full">
            <h1
              className={`text-[16px] font-bold md:text-[26px] ${
                isNightMode
                  ? "text-[#fff]"
                  : "text-[#2b3442]"
              }`}
            >
              {user?.name}
            </h1>
            <h3
              className={`text-[13px] md:text-[16px] mt-[5px] md:mt-0 ${
                isNightMode
                  ? "text-[#fff]"
                  : "text-[#697c9a]"
              }`}
            >
              {user?.created_at &&
                format(
                  new Date(user.created_at),
                  "'Joined' dd MMM yyyy"
                )}
            </h3>
          </div>
          <h2 className="text-[#0079ff] text-[13px] md:text-[15px] mt-[5px]">
            {user?.login}
          </h2>
        </div>
      </div>
      <p
        className={`mt-[34px] text-[13px] md:text-[15px] md:mt-[-30px] md:ml-[154px] ${
          isNightMode
            ? "text-[#fff]"
            : "text-[#4b6a9b]"
        }`}
      >
        {user?.bio}
      </p>
      <div
        className={`w-[279px] h-[85px] mt-[23px] mb-[24px] rounded-[10px] pt-[18px] pr-[14px] pb-[19px] pl-[15px] 
        md:w-[480px] md:pt-[15px] md:pr-[83px] md:pb-[17px] md:pl-[32px] md:mt-[32px] md:ml-[154px] ${
          isNightMode
            ? "bg-[#141d2f]"
            : "bg-[#f6f8ff]"
        }`}
      >
        <div className="flex md:justify-between">
          <p
            className={`w-[79px] text-[11px] text-center md:text-[13px] md:text-start ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#4b6a9b]"
            }`}
          >
            Repos
          </p>
          <p
            className={`w-[81px] text-[11px] text-center md:text-[13px] md:text-start ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#4b6a9b]"
            }`}
          >
            Followers
          </p>
          <p
            className={`w-[89px] text-[11px] text-center md:text-[13px] md:text-start ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#4b6a9b]"
            }`}
          >
            Following
          </p>
        </div>
        <div className="flex mt-[8px] md:justify-between md:mt-[1px]">
          <p
            className={`w-[79px] text-[16px] font-bold text-center md:text-[22px] md:text-start ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#2b3442]"
            }`}
          >
            {user?.public_repos}
          </p>
          <p
            className={`w-[81px] text-[16px] font-bold text-center md:text-[22px] md:text-start ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#2b3442]"
            }`}
          >
            {user?.followers}
          </p>
          <p
            className={`w-[88px] text-[16px] font-bold text-center md:text-[22px] md:text-start ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#2b3442]"
            }`}
          >
            {user?.following}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-[15px] md:ml-[154px]">
        <div className="flex items-center mb-[17px] md:mb-0 md:order-1">
          <img
            src={LocationIcon}
            alt="location icon"
            className={`${
              isNightMode
                ? "filter grayscale-[100%] brightness-0 invert"
                : ""
            }`}
          />
          <p
            className={`text-[13px] ml-[19px] hover:underline hover:cursor-pointer md:text-[15px] ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#4b6a9b]"
            }`}
          >
            {user?.location}
          </p>
        </div>
        <div className="flex items-center mb-[17px] md:mb-0 md:order-3">
          <img
            src={WebsiteIcon}
            alt="website icon"
            className={`${
              isNightMode
                ? "filter grayscale-[100%] brightness-0 invert"
                : ""
            }`}
          />
          <p
            className={`text-[13px] ml-[13px] hover:underline hover:cursor-pointer md:text-[15px] ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#4b6a9b]"
            }`}
          >
            {user?.blog}
          </p>
        </div>
        <div className="flex items-center mb-[16px] md:mb-0 md:order-2">
          <img
            src={TwitterIcon}
            alt="twitter icon"
            className={`${
              isNightMode
                ? "filter grayscale-[100%] brightness-0 invert"
                : ""
            }`}
          />
          <p
            className={`text-[13px] ml-[13px] hover:underline hover:cursor-pointer md:text-[15px] ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#4b6a9b] "
            }`}
          >
            {user?.twitter_username}
          </p>
        </div>
        <div className="flex items-cente md:order-4">
          <img
            src={CompanyIcon}
            alt="company icon"
            className={`md:w-[20px] md:h-[20px] ${
              isNightMode
                ? "filter grayscale-[100%] brightness-0 invert"
                : ""
            }`}
          />
          <p
            className={`text-[13px] ml-[15px] hover:underline hover:cursor-pointer md:text-[15px] ${
              isNightMode
                ? "text-[#ffffff]"
                : "text-[#4b6a9b] "
            }`}
          >
            {user?.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
