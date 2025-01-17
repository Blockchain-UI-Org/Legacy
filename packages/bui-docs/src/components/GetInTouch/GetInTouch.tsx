import React from "react";
import "./GetInTouch.scss";
import { BsDiscord } from "react-icons/bs";
import { GradientButton } from "../Button/GradientButton";
import { GradientInput } from "../GradientInput/GradientInput";
import { twitter_url } from "@site/src/config";
export const GetInTouch = () => {
  return (
    <section className="getInTouch">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-5">
            <div className="getInTouch__card">
              <div className="getInTouch__header">
                <div className="getInTouch__subtitle">GET IN TOUCH</div>
                <h4 className="getInTouch__title">
                  Building with Web3 UX means you are part of an active developer community
                </h4>
              </div>
              <div className="getInTouch__body">
                <p className="getInTouch__info">
                  <BsDiscord />
                  <span>Join the community</span>
                </p>
                <GradientButton
                  onClick={() => {
                    window.open(twitter_url, "_blank");
                  }}
                >
                  Contact Us
                </GradientButton>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-5">
            <div className="getInTouch__card">
              <div className="getInTouch__header">
                {" "}
                <div className="getInTouch__subtitle">SIGN UP</div>
                <h4 className="getInTouch__title">Be the first to hear about updates</h4>
              </div>
              <div className="getInTouch__body">
                <div className="row">
                  <div className="col-xl-7 mb-3 mb-xl-0">
                    <GradientInput placeholder="YOUR EMAIL" />
                  </div>
                  <div className="col-xl-5 ">
                    <GradientButton className="w-100">Subscribe</GradientButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
