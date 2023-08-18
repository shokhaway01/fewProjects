import React from "react";
import "./style.css";
import Rectangle from './Rectangle/Rectangle'
import VectorIcon from "./VectorIcon/VectorIcon";
import TextWrapper from "./TextWrapper/TextWrapper";



const Details = () => {
  return (
    <div className="details">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <Rectangle />
            <div className="group">
              <div className="overlap-2">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <TextWrapper text="Price 0.05$" />
                    <div className="vector-wrapper">
                      <VectorIcon
                        alt="Vector"
                        src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/vector.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="water-price-container">
                        <TextWrapper text="Water Price" />
                        <TextWrapper text="0.05$" />
                    </div>
                    <div className="img-wrapper">
                      <VectorIcon
                        alt="Vector"
                        src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/vector-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="img"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/group-9@2x.png"
            />
            <img
              className="group-2"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/group-8@2x.png"
            />
            <div className="element" id="">02</div>
            <p className="p">Perfect for beginners or anyone looking</p>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/line-6.svg"
            />
            <img
              className="line-2"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/line-7.svg"
            />
            <img
              className="download-premium-png"
              alt="Download premium png"
              src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/download-premium-png-of-fiddle-leaf-fig-png-mockup-plant-in-a-po@2x.png"
            />
            <div className="frame">
              <h1 className="element-min-next-watering">
                <span className="span">36 </span>
                <span className="text-wrapper-3">
                  min
                  <br />
                </span>
                <span className="text-wrapper-4">Next watering</span>
              </h1>
            </div>
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <div className="div-2">
                <span className="text-wrapper-5">
                  16%
                  <br />
                </span>
                <span className="text-wrapper-6">Humidity</span>
              </div>
              <img
                className="rectangle-2"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/rectangle-56-1@2x.png"
              />
            </div>
            <div className="frame-4">
              <div className="div-2">
                <span className="text-wrapper-5">
                  86%
                  <br />
                </span>
                <span className="text-wrapper-6">Fertilizer</span>
              </div>
              <img
                className="rectangle-3"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/rectangle-56@2x.png"
              />
            </div>
            <div className="element-min-next-watering-wrapper">
              <div className="element-min-next-watering-2">
                <span className="span">36 </span>
                <span className="text-wrapper-3">
                  min
                  <br />
                </span>
                <span className="text-wrapper-4">Next watering</span>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-7">Calathea</div>
                <div className="text-wrapper-8">26 weeks</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-container">
            <div className="text-wrapper-9">My plants</div>
                <img
                className="iconsax-linear"
                alt="Iconsax linear"
                src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/iconsax-linear-arrowleft2.svg"
                />
                <div className="settings-wrapper">
                <img
                    className="settings"
                    alt="Settings"
                    src="https://generation-sessions.s3.amazonaws.com/4b0c79dcaafcd6382c69bbedf4e3a976/img/settings@2x.png"
                />
                </div>
            </div>
      </div>
    </div>
  );
};

export default Details;
