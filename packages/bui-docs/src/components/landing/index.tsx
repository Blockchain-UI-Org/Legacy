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
import styled from "@emotion/styled";

const Logo = styled.img`
  margin-right: 50px;
  width: 100px;
  height: auto;

  @media screen and (max-width: 768px) {
    margin-right: 30px;
    width: 90px;
  }
`;

const Logo2 = styled.img`
  width: 30px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;

const ModifiedContainer = styled(Container)`
  margin-top: 300px;

  // @media screen and (max-width: 768px) {
  //   margin-top: 0px;
  //   margin-bottom: -240px;
  // }
`;

const Landing = () => {
  return (
    <div>
      {/* <Menu></Menu> */}
      <GetStartedSection />
      {/* <PartnersSection /> */}
      <ModifiedContainer>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            overflow: "auto",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Logo src="/img/techstars_white.svg" />
          </div>
          <div>
            <Logo src="/img/blockFi.svg" />
          </div>
          <div>
            <Logo src="/img/parallel.png" />
          </div>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <Logo2 src="/img/lantern.png" />
            <Logo src="/img/lantern.svg" />
          </span>
        </div>
      </ModifiedContainer>

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
