import Upworks from "./Upwork";
import { v4 as uuidv4 } from "uuid";
const data = [
  {
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2: "Ut pretium arcu et massa semper, id fringilla leosemper",
    text3: "Sed quis justo ac magna.",
    text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2: "Ut pretium arcu et massa semper, id fringilla leosemper",
    text3: "Sed quis justo ac magna.",
    text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2: "Ut pretium arcu et massa semper, id fringilla leosemper",
    text3: "Sed quis justo ac magna.",
    text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function ExperienceBox() {
  return data.map((e) => {
    let key = uuidv4();
    return (
      <div className="experience-box" key={key}>
        <div className="rounded-xl bg-[#fff] shadow-sm p-8 dark:bg-[#1F2937]">
          <div className="m-auto">
            <div className="flex gap-12 max-sm:gap-4 max-sm:flex-col">
              <div>
                <Upworks />
              </div>
              <div className="flex max-sm:flex-col-reverse gap-12 max-sm:gap-4">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-4">
                    <div className="font-semibold text-xl">
                      <h1>Sr. Frontend Developer</h1>
                    </div>
                    <div className="text-[#4b5563] font-normal text-base dark:text-[#D1D5DB]">
                      <li>{e.text1}</li>
                      <li>{e.text2}</li>
                      <li>{e.text3}</li>
                      <li>{e.text4}</li>
                    </div>
                  </div>
                </div>
                <div className="dark:text-[#D1D5DB]">Nov 2021 - Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
