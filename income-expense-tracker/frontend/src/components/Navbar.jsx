import Geld from "@/images/Geld";
import Leading from "@/images/Leading";
import Profile from "@/images/Profile.png";

export default function Navbar() {
  return (
    <div className="flex justify-between px-[120px] py-4">
      <div className="flex gap-6">
        <a href="/">
          <Geld />
        </a>
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-1 bg-[#0166FF] rounded-3xl p-2 items-center">
          <Leading />
          <button className="text-[#fff]">Record</button>
        </div>
        <div>
          <img
            className=" rounded-[50%]"
            src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDBvEAcFuwOox83~sFLcZ6k4cohFVpjrmmCJx3eX5kiCsx0WWUjmT3RCM7AaLLpEVKQDPT0r4i6Nlk4LhkcbZEOCV-ozEQf~ZZ8e2uTLcqMqZRXtTl1nthEwfmvwzjTBbvVio4iqbUPMHLHcCJAlh0GRJaKEJVNHFr14tpGGcDYDowNyfpXhcLWviUoWftyKsvZ35b1Lw5A6eZ~-vsDarlqbbcn3gooArfMvxbKvzEvWXkIG2qfyaS5Oc8n9hosOiC5~WkTBvjnmKnX0PjB-FUBiz2UNTdpDsp82tC4R0HLNsVlMnu-EK-eBBOc60Cqp0SITrDKMnJaoggK-tNaFBw__"
            width="40px"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}
