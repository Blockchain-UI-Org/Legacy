import { useHistory } from "@docusaurus/router";
import { useColorMode } from "@docusaurus/theme-common";
import React from "react";
import { GradientButton } from "../../Button/GradientButton";
import { Heading } from "../../Heading/Heading";
import "./GetStarted.scss";

const GetStartedSection = () => {
  const history = useHistory();
  const { colorMode } = useColorMode();
  return (
    <section className="getStarted">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 ">
            <div className="leftSection">
              <Heading>
                Bringing Web2<span className={`${colorMode}-colormode-text`}> simplicity and UX </span>to Web3.
              </Heading>
              <div className="description"></div>
              <div className="rightSection d-md-none">
                <img src="/img/mock-up1.svg" alt="iphone_mockup" />
              </div>
              <div className="contactUs">Beta release now available.</div>

              <GradientButton className="button" onClick={() => history.push("/docs/intro")}>
                Get Started
              </GradientButton>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block ">
            <div className="rightSection">
              <img src="/img/mock-up1.svg" alt="iphone_mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
