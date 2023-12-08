import axios from "axios";
import { useRef, useState } from "react";
import { headers } from "../../next.config";

export default function contact() {
  const [data, setData] = useState({ published: true });
  const dataRef = useRef({});
  const handlerInput = (el, obKey) => {
    let mock = {};
    if (obKey === "tags") {
      mock[obKey] = [el.target.value];
    } else {
      mock[obKey] = [el.target.value];
    }
    mock[obKey] = el.target.value;
    setData({ ...data, ...mock });
  };
  const sendRequest = async () => {
    let response = await axios.post("https://dev.to/api/articles", data);
    headers: {
      // "api-key": "YOUR_API_KEY",
      // ContentType:
    }
  };
  console.log(data);
  return (
    <div>
      <div className="flex h-[1230px]">
        <div className="flex flex-col gap-3 w-[400px] h-[300px] m-auto border-1 rounded-md bg-slate-50">
          <input
            onChange={(el) => handlerInput(el, "title")}
            placeholder="title"
            className="p-2 flex flex-col"
          ></input>
          <input
            onChange={(el) => handlerInput(el, "tags")}
            placeholder="tags"
            className=" p-2 flex flex-col"
          ></input>
          <input
            onChange={(el) => handlerInput(el, "body_markdown")}
            placeholder="description"
            className="p-2 h-[600px]"
          ></input>
          <input
            onChange={(el) => handlerInput(el, "series")}
            placeholder="series"
            className=" p-2 flex flex-col"
          ></input>
          <button
            onClick={sendRequest()}
            className="bg-[black] text-[white] p-2"
          >
            sumbit
          </button>
        </div>
      </div>
    </div>
  );
}
