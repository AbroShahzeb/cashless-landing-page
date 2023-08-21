import Typewriter from "typewriter-effect";
import hero from "../assets/hero.png";

function Header() {
  return (
    <header className="header container max-w-6xl mx-auto flex flex-col-reverse gap-4 items-center md:flex-row ">
      <div className=" header-content p-4 flex flex-col gap-4 text-center md:text-left md:w-1/2 md:gap-8">
        <h1 className="text-4xl font-bold md:text-5xl md:leading-tight">
          Say goodbye to
          <Typewriter
            wrapperClassName="typewriter"
            cursorClassName="type"
            options={{
              strings: [
                "transfer fees.",
                "long hold times.",
                "annual fees.",
                "paper forms.",
                "ATM fees.",
                "waiting in line.",
                "SMS fees.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-slate-500 max-w-md text-center self-center md:self-start md:text-start">
          Sign up now for your debit Mastercard and digital wallet. Spend, send
          and withdraw cash without fees.
        </p>
        <button className="text-white rounded-xl px-4 py-2 bg-red-400 text-lg font-medium self-center md:self-start">
          Signup Now
        </button>
      </div>
      <img
        src={hero}
        alt="Hero Image"
        className="w-[60%] self-center md:w-1/2"
      />
    </header>
  );
}

export default Header;
