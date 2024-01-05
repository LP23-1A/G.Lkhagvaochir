import Geld from "@/images/Geld";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <div>
          <Geld />
        </div>
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6">
        <div>Record</div>
        <div>img</div>
      </div>
    </div>
  );
}
