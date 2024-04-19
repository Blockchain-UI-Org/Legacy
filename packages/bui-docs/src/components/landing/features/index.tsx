import React from "react";
import { Heading } from "../../Heading/Heading";
import "./Feature.scss";

const CardsData = [
  {
    icon: "/img/speed-light.svg",
    title: "Increased User Adoption",
    description: "A simpler UX can lead to more people using your product, which can lead to increased revenue.",
  },
  {
    icon: "/img/solar-light.svg",
    title: "Cost",
    description: "Simplifying the interface can lower development and technical support expenses.",
  },
  {
    icon: "/img/people-light.svg",
    title: "Trust",
    description: "Users feel more secure and comfortable using systems that are intuitive and easy to navigate.",
  },
  {
    icon: "/img/outline-light.svg",
    title: "Simple",
    description: "Easy-to-install and clear documentation.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="featureSection">
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <Heading style={{ display: "Flex", justifyContent: "center", textAlign: "center", marginTop: "20px" }}>
            Why?
          </Heading>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {CardsData.map((data) => {
            return (
              <div className="col-md-3 mb-4 mb-md-0">
                <div className="featureCard">
                  {" "}
                  <div className="featureIcon">
                    <img src={data.icon} alt={data.title} />
                  </div>
                  <div className="header">{data.title}</div>
                  <div className="description">{data.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
