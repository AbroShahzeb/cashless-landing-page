import React from "react";
import updates from "../assets/updates.png";
import exchange from "../assets/exchange.png";
import moneyMan from "../assets/man-money.png";

function Connectivity() {
  return (
    <section className="connecting flex flex-col-reverse gap-8 max-w-6xl m-16 mx-auto md:flex-row">
      <div className="flex flex-col gap-16 p-8 md:p-4">
        <h2 className="text-4xl font-bold text-center md:text-left">
          Connecting you to the world
        </h2>

        <ul className="flex flex-col items-center gap-8 w-[80%] mx-auto md:w-full  text-center md:text-left">
          <li className="flex gap-4 flex-col items-center text-center mx-auto w-[80%] md:w-full md:text-left md:flex-row md:flex-start">
            <img src={updates} alt="shopping box" />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-medium">Shop Globally</h3>
              <p className="text-gray-500">
                The SadaPay Mastercard is accepted at 30 million merchants
                around the world, online and in-stores.
              </p>
            </div>
          </li>
          <li className="flex gap-4 flex-col items-center text-center mx-auto w-[80%] md:w-full md:text-left md:flex-row md:flex-start">
            <img src={updates} alt="shopping box" />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-medium">Real-time Updates</h3>
              <p className="text-gray-500">
                TYou’ll get instant transaction alerts on your phone whenever
                there’s activity on your account.
              </p>
            </div>
          </li>
          <li className="flex gap-4 flex-col items-center text-center mx-auto w-[80%] md:w-full md:text-left md:flex-row md:flex-start">
            <img src={exchange} alt="shopping box" />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-medium">
                Lowest Foreign Exchange Rate
              </h3>
              <p className="text-gray-500">
                Enjoy the best foreign exchange rates available nationwide for
                non-PKR card purchases.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <img
        data-aos="fade-right"
        data-aos-delay="300"
        src={moneyMan}
        alt="man money"
        className="w-[60%] md:w-1/2 m-auto"
      />
    </section>
  );
}

export default Connectivity;
