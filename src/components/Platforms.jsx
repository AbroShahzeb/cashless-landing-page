import React from "react";
// import "../css/International.css";

function Platforms() {
  return (
    <section className="flex flex-col gap-8 max-w-6xl m-16 mx-auto text-center p-8 md:p-4">
      <h2 className="text-3xl font-bold">
        Accept international transfers from 45 countries around the world 🌍
      </h2>
      <p className="text-lg text-gray-500">
        Receive money from friends, family or clients using all the top services
        & platforms.
      </p>
      <img
        data-aos="fade-right"
        src="assets/platforms.png"
        alt="platforms"
        className="w-[80%] mx-auto"
      />
    </section>
  );
}

export default Platforms;
