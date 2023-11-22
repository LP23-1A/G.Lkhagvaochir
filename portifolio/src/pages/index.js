import Navbar from "@/components/Navbar";
import LocationIcon from "@/components/icon/LocationIcon";
import SagarIMG from "@/components/Sagar";
import SocialI from "@/components/icon/Socialicon";
import SagarRed from "@/components/Sagarred";
import Topic from "@/components/Topic";
import Icons from "@/components/Icons";
import IconsS from "@/components/IconsS";
import TopicD from "@/components/TopicD";
import Upworks from "@/components/Upwork";

export default function Home() {
  return (
    <div className="Container">
      <Navbar />
      <section>
        <div className="heroContainer flex gap48">
          <div className="heroContainerText heroText gap48">
            <div>
              <h1>Hi, I’m Sagar 👋</h1>
              <p className="size16 fontW defColor">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div className="heroSec gap8 ">
              <div className="flex heroGreen gap8">
                <LocationIcon />
                <p>Ahmedabad, India</p>
              </div>
              <div className="flex heroGreen gap8">
                <span className="Greentseg"></span>
                <p>Available for new projects</p>
              </div>
            </div>
            <div>
              <SocialI />
            </div>
          </div>
          <div className="sagarI flex">
            <SagarIMG />
          </div>
        </div>
      </section>
      <section>
        <div className="flex column gap48 mContainer">
          <div className="justifyC aligItemC flex">
            <Topic text="About me" />
          </div>
          <div className="mContainerS flex justifyC aligItemC gap48">
            <div>
              <div className="redShadow">
                <SagarRed />
              </div>
            </div>
            <div className="mText gap16 flex column">
              <h1 className="textF">Curious about me? Here you have it:</h1>
              <p className="textS defColor">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="textS defColor">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="textS defColor">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="textS defColor">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="textS defColor">
                Finally, some quick bits about me.
              </p>
              <div className="last flex gap48">
                <div className=" textS defColor ">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <div className="textS defColor ">
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </div>
              <p className="textS defColor">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="tContainer gap48">
          <div className="flex column gap48">
            <div className="flex column gap16">
              <div className="justifyC aligItemC flex">
                <Topic text="Skills" />
              </div>
              <div>
                <TopicD text="The skills, tools and technologies I am really good at:" />
              </div>
            </div>
            <div className="iconsS">
              <Icons />
              <div>
                <IconsS />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="containerSS">
          <div className="flex column gap16">
            <div className="justifyC aligItemC flex">
              <Topic text="Experience" />
            </div>
            <div>
              <TopicD text="Here is a quick summary of my most recent experiences:" />
            </div>
          </div>
          <div className="box">
            <div className="flex gap48">
              <div>
                <Upworks />
              </div>
              <div className="textC gap16 flex column">
                <div className="textCC column">
                  <div>
                    <h1>Sr. Frontend Developer</h1>
                  </div>
                  <div className="defColor">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Ut pretium arcu et massa semper, id fringilla leo semper.
                    </li>
                    <li>Sed quis justo ac magna.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </div>
                </div>
              </div>
              <div>Nov 2021 - Present</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
