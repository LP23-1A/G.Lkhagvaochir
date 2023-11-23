import BoxIMG from "./Box";
import IconB from "./IconsB";
import Tags from "./Tags";
import Topic from "./Topic";
import TopicD from "./TopicD";

export default function BoxC() {
  return (
    <section>
      <div className=" gap48 flex column">
        <div className="workBoxC flex">
          <div className="workBox">
            <BoxIMG />
          </div>
          <div className="boxWhite gap24 flex column">
            <h1>Fiskil</h1>
            <p className="defColor text16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="justifyC aligItemC flex">
              <Tags />
            </div>
            <button className="button flex">
              <IconB />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
