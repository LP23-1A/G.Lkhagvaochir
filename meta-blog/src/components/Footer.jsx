import fb from "@/icons/fb.png";
import tw from "@/icons/tw.png";
import ig from "@/icons/ig.png";
import link from "@/icons/link.png";
import Logo from "@/icons/Logo.png";
export default function Footer() {
  return (
    <div className="container max-w-[1230px] m-auto pt-16">
      <div className="content flex items-start m-auto pb-6">
        <div className="flex flex-col gap-6 max-w-[289px] items-start">
          <div className="flex flex-col gap-3">
            <h1>About</h1>
            <p className="text-[16px] text-[#696A75] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <p className="text-[16px] text-[#696A75] font-normal">
              Email : info@jstemplate.net
            </p>
            <p className="text-[16px] text-[#696A75] font-normal">
              Phone : 880 123 456 789
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[521px] gap-20 items-center">
          <div className="text-[16px] text-[#696A75] font-normal  gap-2 item items-start flex flex-col">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex gap-5 w-[16px] h-[16px] shrink-0">
          <img src={fb.src} alt="" />
          <img src={tw.src} alt="" />
          <img src={ig.src} alt="" />
          <img src={link.src} alt="" />
        </div>
      </div>

      <div className="copyright flex border-t-[1px] py-8">
        <div className="flex gap-4">
          <img src={Logo.src} alt="" />
          <div className="flex flex-col items-start">
            <p>
              Meta
              <span className="text-[20px] font-medium text-[#141624]">
                Blog
              </span>
            </p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-7 justify-end items-center flex-1">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
