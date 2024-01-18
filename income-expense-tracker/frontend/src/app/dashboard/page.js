"use client";
import Navbar from "@/components/Navbar";
import Noise from "@/images/Noise.png";
import Shape from "@/images/Shape.png";
import nfc from "@/images/nfc.png";
import Vector from "@/images/Vector.png";
import Card from "@/components/Card";
import House from "@/components/House";
import Chart from "@/components/Chart";
import DoughnutChart from "@/components/Doughnut";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#F3F4F6] w-[1440px] m-auto pt-8 pl-32">
        <div className="flex gap-6">
          <div className="w-[384px]">
            <img
              className="bg-cover rounded-2xl absolute bg-[#0166FF]"
              src={Noise.src}
              alt=""
            />
            <img
              className="bg-cover relative left-40 top-5 "
              src={Shape.src}
              alt=""
            />
            <img className="relative bottom-12 left-80" src={nfc.src} alt="" />
            <div className="relative flex bottom-52 pl-7 gap-2">
              <img src={Vector.src} alt="" />
              <p className="text-[#fff]">Geld</p>
            </div>
            <div className="relative bottom-32 pl-7">
              <p className=" opacity-[0.5]">Cash</p>
              <p className="text-[#fff]">10,000,000</p>
            </div>
          </div>
          {/* second card */}
          <Card />
          <Card />
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex">
            <div className="w-[588px] bg-[#fff] rounded-xl px-6 py-4">
              <p></p>
              <Chart />
            </div>
            <div className="w-[250px]">
              <DoughnutChart />
            </div>
          </div>
          <div>
            <div className=" bg-[#fff] rounded-2xl">
              <div className="py-5 pl-6 border-b">
                <p>Last Records</p>
              </div>
              <House />
              <House />
              <House />
              <House />
              <House />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
