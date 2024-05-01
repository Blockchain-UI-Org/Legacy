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
              <Heading>Make Web3 Simple</Heading>
              <div className="description"></div>
              <div className="rightSection d-md-none">
                <img src="/img/mock-up1.svg" alt="iphone_mockup" />
              </div>
              <div className="contactUs">
                We provide tools powered by AI to improve the user experience for developers and users of Web3.
                {/* <span className={`${colorMode}-colormode-text`}> Web3 </span> */}
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd0D1LURMSx9-4oLMXngkEjaeEqs3sls2XyNPjLSaOApNy7rQ/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GradientButton className="button">Join our Wait List</GradientButton>
              </a>
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
