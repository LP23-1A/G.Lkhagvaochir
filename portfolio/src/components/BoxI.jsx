import BoxIMG from "./Box";
import IconB from "./IconsB";
import Tags from "./Tags";
import Topic from "./Topic";
import TopicD from "./TopicD";

export default function BoxC() {
  return (
    <section>
      <div className=" gap-12 flex flex-col ">
        <div className="m-auto  rounded-xl shadow-sm md:flex">
          <div className=" p-12 justify-center items-center bg-[#F9FAFB] dark:bg-[#374151]">
            <BoxIMG />
          </div>
          <div className="max-w-[480px]  p-12 gap-6 flex flex-col dark:bg-[#1F2937]">
            <h1>Fiskil</h1>
            <TopicD text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
            <div className="justify-center items-center flex">
              <Tags />
            </div>
            <button className="bg-[#fff]  p-1.5  items-center flex dark:bg-[#1F2937]">
              <IconB />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
