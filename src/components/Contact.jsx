import React from "react";
import chatIcon from "../assets/chat-icon.png";
import chat from "../assets/chat.png";
import planArrow from "../assets/arrow-plane.png";

function Contact() {
  return (
    <section className="w-full m-16 mb-0 pb-8 mx-auto flex flex-col bg-slate-50 p-8 gap-28">
      <div className="flex flex-col items-center gap-4">
        <img src={chatIcon} alt="chat-icon" />
        <h3 className="text-2xl font-bold">Here for you, any time</h3>
        <p className="text-gray-500">
          Message us directly from the app for help.
        </p>
        <img data-aos="fade-right" src={chat} alt="chat" />
      </div>
      <div className="flex w-[80%] mx-auto items-center flex-col justify-between gap-4 md:flex-row">
        <img src={planArrow} alt="arrow icon" data-aos="fade-up" />
        <div
          className="flex flex-col md:text-left gap-2 items-center text-center md:items-start md:mr-auto"
          data-aos="fade-down"
        >
          <h3 className="text-2xl font-bold">Ready to join?</h3>
          <h2 className="text-2xl font-bold text-[salmon]">Sign up today</h2>
        </div>
        <button className="text-white rounded-xl px-4 py-2 bg-red-400 text-lg font-medium self-center ">
          Signup Now
        </button>
      </div>
    </section>
  );
}

export default Contact;
