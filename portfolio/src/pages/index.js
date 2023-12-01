import Navbar from "@/components/Navbar";
import LocationIcon from "@/components/icon/LocationIcon";
import SagarIMG from "@/components/Sagar";
import SocialI from "@/components/icon/Socialicon";
import SagarRed from "@/components/Sagarred";
import Topic from "@/components/Topic";
import TopicD from "@/components/TopicD";
import BoxC from "@/components/BoxI";
import BoxW from "@/components/BoxW";
import MSG from "@/components/messegIcon";
import Copy from "@/components/CopyIcon";
import Phone from "@/components/Phoneicon";
import C from "@/components/Cicon";
import ExperienceBox from "@/components/ExperienceBox";
import SkillsFu from "@/components/SkillsFu";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="Hero">
        <div className="heroContainer max-sm:flex-col-reverse max-sm:px-4 max-sm:py-16 flex gap-12 px-20 py-24 m-auto max-w-[1440px]">
          <div className="flex-col gap-12 flex max-sm:flex">
            <div className="gap-2 flex flex-col max-w-[1440px]">
              <h1 className="font-bold text-6xl">Hi, I’m Sagar 👋</h1>
              <p className="text-base text-[#4b5563] max-w-[768px] font-normal dark:text-[#D1D5DB]">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div className="flex gap-2 flex-col dark:text-[#D1D5DB]">
              <div className="flex gap-2">
                <LocationIcon />
                <p>Ahmedabad, India</p>
              </div>
              <div className="flex heroGreen gap8 items-center gap-2">
                <span className="rounded-3xl bg-green-500 w-[10px] h-[10px] "></span>
                <p>Available for new projects</p>
              </div>
            </div>
            <div>
              <SocialI />
            </div>
          </div>
          <div className="m-auto max-w-[280px]  shrink-0 flex shadow-2xl">
            <SagarIMG />
          </div>
        </div>
      </section>
      <section className="AboutMe dark:bg-[#111827]">
        <div className="flex flex-col gap-12 bg-[#F9FAFB] dark:bg-[#111827] max-sm:px-4 max-sm:py-16 px-20 py-24 m-auto max-w-[1440px]">
          <div className="justify-center items-center flex" id="AboutMe">
            <Topic text="About me" />
          </div>
          <div className="flex-wrap flex justify-center gap-12">
            <div>
              <div className="max-w-[400px]">
                <SagarRed />
              </div>
            </div>
            <div className="max-w-[492px] m-auto gap-4 flex flex-col text-base font-normal not-italic ">
              <h1 className="font-semibold text-3xl">
                Curious about me? Here you have it:
              </h1>
              <p className="text-base font-normal text-[#4b5563] dark:text-[#D1D5DB]">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="text-base font-normal text-[#4b5563] dark:text-[#D1D5DB]">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="text-base font-normal text-[#4b5563] dark:text-[#D1D5DB]">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="text-base font-normal text-[#4b5563] dark:text-[#D1D5DB]">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="text-base font-normal text-[#4b5563] dark:text-[#D1D5DB]">
                Finally, some quick bits about me.
              </p>
              <div className="flex gap-12 ">
                <div className=" text-base font-normal text-[#4b5563] dark:text-[#D1D5DB]">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <div className="text-base font-normal text-[#4b5563] dark:text-[#D1D5DB] ">
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </div>
              <p className="text-base font-normal text-[#4b5563] dark:text-[#D1D5DB]">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Skills">
        <div className="px-20 py-24 gap-12 max-sm:px-4 max-sm:py-16 m-auto max-w-[1440px]">
          <div className="flex flex-col gap-12 overflow-hidden">
            <div className="flex flex-col gap-4">
              <div className="justify-center items-center flex" id="SkillS">
                <Topic text="Skills" />
              </div>
              <div>
                <TopicD text="The skills, tools and technologies I am really good at:" />
              </div>
            </div>
            <div className="m-auto  gap-12  text-center">
              <SkillsFu />
            </div>
          </div>
        </div>
      </section>
      <section className="Experience bg-[#f9fafb] w-full flex m-auto dark:bg-[#111827]">
        <div className="w-full md:w-fit p-4 flex gap-12 flex-col m-auto">
          <div className="gap-4 flex flex-col ">
            <div className="justify-center items-center flex" id="Experience">
              <Topic text="Experience" />
            </div>
            <div>
              <TopicD text="Here is a quick summary of my most recent experiences:" />
            </div>
          </div>
          <ExperienceBox />
        </div>
      </section>
      <section className="Work gap-12 flex flex-col px-20 py-24  max-sm:px-4 max-sm:py-16 m-auto max-w-[1440px] sm:px-4 sm:py-16 ">
        <div className="gap-4 flex flex-col">
          <div className="justify-center items-center flex" id="work">
            <Topic text="Work" />
          </div>
          <div>
            <TopicD text="Some of the noteworthy projects I have built:" />
          </div>
        </div>
        <BoxC />
        <BoxW />
        <BoxC />
      </section>
      <section className="GetInTouch max-sm:px-4 max-sm:py-16 px-20 py-24">
        <div className="px-8 flex flex-col justify-center items-center gap-12 m-auto max-w-[1440px]">
          <div className="flex flex-col gap-4">
            <div className="justify-center items-center flex" id="GetInTouch">
              <Topic text="Get in touch" />
            </div>
            <div className="max-w-[576px] font-normal m-auto text-center text-xl flex justify-center items-center">
              <TopicD
                text={`What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}
              />
            </div>
          </div>
          <div className=" flex max-sm:text-lg flex-col font-semibold text-4xl justify-center items-center gap-4 max-w-[596px]">
            <div className="flex">
              <MSG />
              <h1>reachsagarshah@gmail.com</h1>
              <Copy />
            </div>
            <div className="flex max-sm:text-lg">
              <Phone />
              <h1>+91 8980500565</h1>
              <Copy />
            </div>
          </div>
          <div className="gap-2 flex flex-col">
            <div>
              <TopicD text="You may also find me on these platforms!" />
            </div>
            <div className="flex justify-center items-center">
              <SocialI />
            </div>
          </div>
        </div>
      </section>
      <footer className="px-6 py-24 bg-[#F9FAFB] w-full dark:bg-[#111827]">
        <div className="m-auto max-w-[1440px] h-[68px]">
          <div className="flex items-center justify-center gap-2 text-center">
            <div>
              <C />
            </div>
            <div>
              <TopicD text="2023 | Designed and coded with ❤️️ by Sagar Shah" />
            </div>
          </div>
        </div>
      </footer>
      <section></section>
    </div>
  );
}
