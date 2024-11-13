import React from "react";
import TrendyNewsImg from "../assets/TrendyNewsImg.svg";
const Card = ({ data }) => {
  console.log(data);

  return (
    <div className=" flex flex-wrap gap-10  lg:px-20 px-10 justify-center ">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="  w-[30pc] gap-3 border-[0.3px] border-blue-500  rounded-md p-5 flex flex-col relative items-start "
          >
            <p className=" absolute top-0 right-1 bg-zinc-800 py-1 px-3 rounded-md  ">
              {item.publishedAt}
            </p>
            <a
              href={item.url}
              target="_blank"
              className=" pt-4 text-xl font-extrabold cursor-pointer hover:text-blue-600  "
            >
              {item.title}
            </a>
            <img
              src={item.urlToImage ? item.urlToImage : TrendyNewsImg}
              width="450"
              height="320"
              className="  "
            />
            <p className=" text-justify  ">{item.content}</p>
            <p className=" text-justify  ">{item.description}</p>
            <p>Source : {item.source.name}</p>
            <a
              href={item.url}
              target="_blank"
              className=" bg-blue-500 py-1 px-3 rounded-md font-extrabold hover:text-blue-500 hover:bg-transparent "
            >
              Read More
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
