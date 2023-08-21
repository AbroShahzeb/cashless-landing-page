import React from "react";
import manCouch from "../assets/man-couch.png";
import tick from "../assets/tick.png";

function Perspective() {
  return (
    <section className="flex flex-col gap container m-8 mx-auto gap-4 items-center md:flex-row max-w-6xl">
      <img
        data-aos="fade-right"
        src={manCouch}
        alt="Man relaxing"
        className="w-[80%] md:w-1/2"
      />
      <div
        data-aos="fade-left"
        className="w-[80%] md:w-1/2 flex flex-col gap-4"
      >
        <h2 className="text-5xl">We have a different perspective about fees</h2>
        <p className="text-lg text-slate-500">
          SadaPay doesn’t have any costly physical branches like a traditional
          bank, which lets us pass those savings onto our customers.{" "}
        </p>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <img className="tick" src={tick} />
            <p className="text-gray-500">No annual fees or minimum deposit</p>
          </li>
          <li className="flex items-center gap-4">
            <img className="tick" src={tick} />
            <p className="text-gray-500">
              {" "}
              Free, instant transfers to any bank or wallet in Pakistan
            </p>
          </li>
          <li className="flex items-center gap-4">
            <img className="tick" src={tick} />
            <p className="text-gray-500">
              Free cash withdrawals at any ATM in Pakistan (3x per month)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Perspective;
