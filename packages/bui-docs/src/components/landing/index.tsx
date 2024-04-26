import React from "react";
import ComponentsSection from "./library";
import FeaturesSection from "./features";
import GetStartedSection from "./getStarted";
import { Container, Partner, Partners } from "./styled";
import { Roadmap } from "../Roadmap";
import CommunitySection from "./community";
import { FAQSection } from "../FAQSection/FAQSection";
import { GetInTouch } from "../GetInTouch/GetInTouch";
import PartnersSection from "./partners";
import { Heading } from "../Heading";

const Landing = () => {
  return (
    <div>
      {/* <Menu></Menu> */}
      <GetStartedSection />
      {/* <PartnersSection /> */}
      <div className="container" style={{ marginTop: "300px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <img style={{ marginRight: "50px" }} width="200" height="auto" src="/img/techstars_white.svg" />
          <img style={{ marginRight: "50px" }} width="200" height="auto" src="/img/blockFi.svg" />
          <img style={{ marginRight: "50px" }} width="200" height="auto" src="/img/parallel.png" />
          <div>
            <img style={{}} width="50" height="auto" src="/img/lantern.png" />
            <img style={{}} width="200" height="auto" src="/img/lantern.svg" />
          </div>
        </div>
      </div>
      {/* <div style={{ display: "flex", width: "100%" }}>
        <Container>
          <div className="header"></div>

         
        </Container>
      </div> */}
      {/* <CommunitySection /> */}

      <br />
      <br />
      <br />
      <br />
      <FeaturesSection />
      {/* <Roadmap
        items={[
          { title: "Launch", description: "", completed: true },
          {
            completed: true,
            title: "Component Library",
            description: "Low Code",
          },
          {
            completed: false,
            title: "Theme Library",
            description: "Less Code",
          },
          { completed: false, title: "Drag n Drop", description: "No Code" },
        ]}
      /> */}
      {/* <FAQSection /> */}
      {/* <GetInTouch /> */}
      {/* <ComponentsSection /> */}

      <div></div>
    </div>
  );
};

export default Landing;
