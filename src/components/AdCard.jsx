import React from "react";
import climacalido from "../images/clima-calido.jpg";
import "../styles/CssCards.css";

const AdCard = () => {
  return (
    <div class="content-ad">
      <h1 class="text-grand">
        To obtain the weather of your city you must accept the permissions
        <div class="loader-trans"></div>
        <div class="cloud">
          <div class="cloud-part"></div>
          <div class="cloud-part"></div>
          <div class="cloud-part"></div>
          <div class="cloud-part"></div>
          <div class="cloud-part"></div>
          <div class="rain">
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
          </div>
        </div>
      </h1>
      <img src={climacalido} width="80%" height="80%" className="image"></img>
    </div>
  );
};

export default AdCard;
