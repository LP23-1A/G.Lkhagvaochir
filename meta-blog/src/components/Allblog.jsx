import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

let api = "https://dev.to/api/articles?";

export default function AllBlog({ isAllBlog }) {
  const [data, setData] = useState([]);
  const getData = async (api) => {
    let res = await axios.get(api);
    setData(() => [...res.data]);
  };
  const [add, setAdd] = useState(6);
  const handler = () => {
    getData("https://dev.to/api/articles");
    setAdd((prev) => prev + 3);
  };

  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className="flex flex-col gap-8 max-w-[1230px] m-auto">
      <div className="gap-5 grid-rows-2 grid-cols-3 grid">
        {!isAllBlog
          ? data.slice(0, add).map((e) => {
              let key = uuidv4();
              return (
                <div
                  key={key}
                  className="flex flex-col rounded-[12px] border-solid border-[#E8E8EA] border-2 p-4 mx-auto"
                >
                  <Link href={`/blogs/${e.id}`}>
                    <div className="flex gap-5 flex-col">
                      <img src={e.social_image} alt="" />
                      <div className="flex flex-col ">
                        <a
                          href="Technology"
                          className="rounded-md px-[5px] py-1 text-[#4B6BFB] bg-[#f1f1f5] text-center justify-center w-fit items-center"
                        >
                          {e.tags}
                        </a>
                        <p className="text-[#181A2A] text-[24px] font-semibold overflow-hidden h-[144px]">
                          {e.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-[#97989F] text-[16px] font-normal ">
                      {e.published_timestamp}
                    </div>
                  </Link>
                </div>
              );
            })
          : data.map((e) => {
              let key = uuidv4();
              return (
                <div
                  key={key}
                  className="flex flex-col rounded-[12px] border-solid border-[#E8E8EA] border-2 p-4 mx-auto"
                >
                  <Link href={`/blogs/${e.id}`}>
                    <div className="flex gap-5 flex-col">
                      <img src={e.social_image} alt="" />
                      <div className="flex flex-col ">
                        <a
                          href="Technology"
                          className="rounded-md px-[5px] py-1 text-[#4B6BFB] bg-[#f1f1f5] text-center justify-center w-fit items-center"
                        >
                          {e.tags}
                        </a>
                        <p className="text-[#181A2A] text-[24px] font-semibold overflow-hidden h-[144px]">
                          {e.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-[#97989F] text-[16px] font-normal ">
                      {e.published_timestamp}
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
      <button
        onClick={handler}
        className="flex gap-3 items-center justify-center px-5 py-3 text-[16px] font-medium rounded-[12px] border-solid border-[#E8E8EA] border-2 m-auto text-[#696A75]"
      >
        Load More
      </button>
    </div>
  );
}
