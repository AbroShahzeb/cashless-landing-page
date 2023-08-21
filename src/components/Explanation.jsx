import React from "react";

function Explanation() {
  return (
    <section className="bg-slate-50 px-8 py-16 my-24 flex flex-col gap-4 md:px-4 lg:px-24">
      <h1 data-aos="fade-up" className="text-8xl font-bold">
        Sada
      </h1>
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-4xl font-medium"
      >
        [sa•da] <i>adjective</i>
      </h2>
      <p className="text-2xl" data-aos-delay="400" data-aos="fade-right">
        <i>Urdu:</i> <strong>simple</strong>
      </p>
      <p className="arabic text-2xl" data-aos-delay="500" data-aos="fade-right">
        <i>Arabic:</i> <strong>Happiness</strong>
      </p>
      <p
        className="english text-2xl text-[#ff6c59]"
        data-aos-delay="600"
        data-aos="fade-right"
      >
        <i>English:</i> the most <strong>simple</strong> way to manage money
      </p>
    </section>
  );
}

export default Explanation;
