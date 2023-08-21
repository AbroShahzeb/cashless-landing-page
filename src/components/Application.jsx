import React from "react";
import inApp from "../assets/in-app.png";
import control from "../assets/control.png";
import numberless from "../assets/numberless.png";

function Application() {
  return (
    <section className="flex items-center flex-col gap-8  max-w-6xl p-8 mx-auto md:flex-row md:p-4">
      <img
        src={control}
        className="md:w-1/2"
        alt="Phone"
        data-aos="fade-right"
      />
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Complete control of your money</h2>
        <ul className="flex flex-col gap-4 items-start">
          <li
            className="flex flex-col gap-2 items-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={inApp} alt="in-app" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">In-app Card Controls</h3>
              <p className="text-gray-500">
                Misplaced your card? Freeze it. Want to shop online? Activate
                international payments with one tap.
              </p>
            </div>
          </li>
          <li
            className="flex flex-col gap-2 items-start"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={numberless} alt="in-app" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Numberless Card</h3>
              <p className="text-gray-500">
                To reduce fraud risk, your card number is only visible securely
                in your app. It’s not printed on the plastic! 😁
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Application;
