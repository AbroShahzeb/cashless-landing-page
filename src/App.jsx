import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Explanation from "./components/Explanation";
import Perspective from "./components/Perspective";
import Security from "./components/Security";
import Connectivity from "./components/Connectivity";
import Application from "./components/Application";
import Platforms from "./components/Platforms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Loader />
      <Navigation />
      <Header />
      <Explanation />
      <Perspective />
      <Security />
      <Connectivity />
      <Application />
      <Platforms />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
