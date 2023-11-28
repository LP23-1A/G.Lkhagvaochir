import BoxIMG from "./Box";
import IconB from "./IconsB";
import Tags from "./Tags";
import Topic from "./Topic";
import TopicD from "./TopicD";

export default function BoxC() {
  return (
    <section>
      <div className=" gap-12 flex flex-col">
        <div className="m-auto  rounded-xl shadow-sm md:flex">
          <div className="min-w-[480px] p-12 justify-center items-center bg-[#F9FAFB]">
            <BoxIMG />
          </div>
          <div className="w-[576px] h-[480] p-12 gap-6 flex flex-col">
            <h1>Fiskil</h1>
            <p className="w-[480px] font-base font-normal text-[#4b5563] justify-center items-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="justify-center items-center flex">
              <Tags />
            </div>
            <button className="bg-[#fff]  p-1.5  items-center flex">
              <IconB />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
