import React from "react";

function Security() {
  return (
    <section className="container max-w-6xl m-16 mx-auto flex flex-col gap-16 p-8 md:p-4">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-4xl font-medium">Security you can trust</h2>
        <p className="text-lg text-gray-500">
          We safeguard your funds and use advanced system to protect your
          digital wallet.
        </p>
      </div>

      <div
        className="flex flex-col gap-4 md:flex-wrap md:flex-row"
        data-aos="fade-up"
      >
        <div className="p-8 rounded-xl w-[80%]  md:w-[33%] md:items-start md:text-start  m-auto flex flex-col gap-4 items-center text-center hover:shadow-lg hover:border-t-8 hover:border-t-[salmon] transition-all">
          <img src="assets/dollar.png" alt="safe image" />
          <h3 className="text-2xl font-bold">Serious Protection</h3>
          <p className="text-md text-gray-500">
            We protect your funds and sensitive personal data with encryption
            in-flight and at-rest.
          </p>
        </div>
        <div className="p-8 rounded-xl w-[80%]  md:w-[33%] md:items-start md:text-start  m-auto flex flex-col gap-4 items-center text-center hover:shadow-lg hover:border-t-8 hover:border-t-[salmon] transition-all">
          <img src="assets/biometric.png" alt="safe image" />
          <h3 className="text-2xl font-bold">Biometric Access</h3>
          <p className="text-md text-gray-500">
            Use fingerprint or Face ID for quick and easy access to your account
            information.
          </p>
        </div>
        <div className="p-8 rounded-xl w-[80%]  md:w-[30%] md:items-start md:text-start  m-auto flex flex-col gap-4 items-center text-center hover:shadow-lg hover:border-t-8 hover:border-t-[salmon] transition-all">
          <img src="assets/security.png" alt="safe image" />
          <h3 className="text-2xl font-bold">AI Fraud Detection</h3>
          <p className="text-md text-gray-500">
            We've implemented best-in-class fraud detection systems to keep your
            money safe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Security;
