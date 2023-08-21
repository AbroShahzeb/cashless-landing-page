import React from "react";
import beatingHearts from "./assets/beating-hearts.gif";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
};

function PreLoader() {
  return (
    <div style={styles} className="preloader">
      <img src={beatingHearts} alt="beating hearts" />
    </div>
  );
}

export default PreLoader;
