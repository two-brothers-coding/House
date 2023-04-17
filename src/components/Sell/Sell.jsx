import React from "react";
import "./sell.scss"
import house from "../../images/house-sell.png";
import row1 from "../../images/Row 1.png";
import row2 from "../../images/Row 2.png";
import btnContact from "../../images/Contact Now.png"
import infoImg from "../../images/info-img.png"
function Sell() {
  return (
    <div className="sell">
      <div className="leftSell">
        <div className="line-Wrapper">
          <div className="line"></div>
          <h3 className="ready">Ready to Sell!</h3>
        </div>
        <div className="info">
          <h2 className="recText">Let’s tour and see our house!</h2>
          <p className="pText">
            Houses recommended by our partners that have been
            <br /> curated to become the home of your dreams!
          </p>
        </div>
        <div className="houseDetail">
          <h3 className="detail">House Detail</h3>
          <img src={row1} alt="row" />
          <img src={row2} alt="row" />
        </div>
        <div className="line-wapper"></div>
        <div className="contact">
          <img src={infoImg} alt="info" />
          <button className="btnCont"><img src={btnContact} alt="img" /></button>
        </div>
      </div>
      <div className="imgSell">
        <img src={house} alt="IMG" />
      </div>
    </div>
  );
}

export default Sell;
