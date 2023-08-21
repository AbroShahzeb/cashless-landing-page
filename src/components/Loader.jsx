import { useEffect } from "react";
import PreLoader from "../PreLoader";

export default function Loader() {
  useEffect(() => {
    window.onload = () => {
      const preloader = document.querySelector(".preloader");
      preloader.remove();
    };
  }, []);
  return <PreLoader />;
}
