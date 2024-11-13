import React, { useEffect, useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [Serch, setSerch] = useState("India");
  const [NewsData, setNewsData] = useState([]);

  const getData = (query) => {
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=2e5d16889e2e49e3ae16c59e6287690a`
    )
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData(Serch);
  }, [Serch]);

  const HandelUserClick = (val) => {
    setSerch(val);
  };
  const HandelSubmit = (val) => {
    setSerch(val);
  };

  return (
    <div className=" w-full h-full bg-zinc-900 text-white  ">
      <div className=" w-full lg:px-20 px-10 py-7 bg-zinc-800 text-white flex flex-wrap gap-5 justify-between items-center  ">
        <div className="Logo text-4xl  ">Trendy News</div>
        <div className=" flex gap-3 text-[20px] ">
          <a
            onClick={(e) => HandelUserClick(e.target.value)}
            className=" cursor-pointer border-b-2 hover:border-blue-500 border-transparent transition-all duration-300  "
          >
            All News
          </a>
          <a
            onClick={(e) => HandelUserClick(e.target.value)}
            className=" cursor-pointer border-b-2 hover:border-blue-500 border-transparent transition-all duration-300  "
          >
            Trending
          </a>
        </div>
        <div className=" px-4 py-2 bg-zinc-900 rounded-md  ">
          <input
            onChange={(e) => HandelSubmit(e.target.value)}
            type="search"
            placeholder="Search News "
            className=" bg-transparent text-white text-xl outline-none "
          />
          <button
            onClick={()=>getData}
            type="submit"
            className=" bg-blue-500 py-2 px-3 rounded-md cursor-pointer "
          >
            Search
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-center py-6 flex-col gap-4  lg:px-20 px-10 ">
        <h1 className=" text-3xl font-semibold text-center  ">
          Stay Update With Trendy News
        </h1>
        <div className=" flex gap-7  flex-wrap items-center justify-center ">
          {[
            "New Job",
            "Sports",
            "Politics",
            "New Startup",
            "Health",
            "Fitness",
            "Tech",
          ].map((item, index) => (
            <button
              onClick={() => HandelUserClick(item)}
              className=" bg-blue-500 py-1 px-3 rounded-lg cursor-pointer text-xl "
              type="button"
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <Card data={NewsData} />
    </div>
  );
};

export default App;
