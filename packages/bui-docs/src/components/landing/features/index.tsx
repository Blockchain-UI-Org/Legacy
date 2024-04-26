import React from "react";
// import { Heading } from "../../Heading/Heading";
import "./Feature.scss";
import styled from "@emotion/styled";

const CardsData = [
  {
    icon: "",
    title: "Wallets",
    description: `Onboard users quickly and securely with our white-label wallet, easily integrated with just a few lines of code. Enjoy optional features like seed phrase management, account recovery, and KYC integration, catering to both centralized and decentralized applications.`,
  },
  {
    icon: "/img/solar-light.svg",
    title: "Fiat on-ramps",
    description:
      "Onboard new web3 users with easy access to crypto using credits cards, bank accounts, or cryptocurrencies.",
  },
  {
    icon: "/img/people-light.svg",
    title: "Simplify gas fees",
    description: "Handle gas fees for users automatically.",
  },
  {
    icon: "/img/outline-light.svg",
    title: "Analytics",
    description: "Learn about how users are interacting with your product without collecting their data.",
  },
  {
    icon: "/img/outline-light.svg",
    title: "Transaction Notifications",
    description:
      "Send friendly alerts via email or text when blockchain transactions are complete, so users can carry on with peace of mind.",
  },
  {
    icon: "/img/outline-light.svg",
    title: "Scale Across Multiple Chains with Ease",
    description:
      "Effortlessly craft tailored experiences across diverse blockchains. Deploy wallets, contracts, mint NFTs and more.",
  },
  // {
  //   icon: "/img/outline-light.svg",
  //   title: "Documentation",
  //   description: "Easy-to-install and clear documentation.",
  // },
];
// const CardsData2 = [
//   {
//     icon: "/img/speed-light.svg",
//     title: "Increased User Adoption",
//     description: "A simpler UX can lead to more people using your product, which can lead to increased revenue.",
//   },
//   {
//     icon: "/img/solar-light.svg",
//     title: "Cost",
//     description: "Simplifying the interface can lower development and technical support expenses.",
//   },
//   {
//     icon: "/img/people-light.svg",
//     title: "Trust",
//     description: "Users feel more secure and comfortable using systems that are intuitive and easy to navigate.",
//   },
//   {
//     icon: "/img/outline-light.svg",
//     title: "Simple",
//     description: "Easy-to-install and clear documentation.",
//   },
// ];

const Heading = styled.h1`
  text-align: center;
  margin-bottom: -50px;
  font-size: 2.5rem;
  width: 60%;

  @media (max-width: 767px) {
    margin-top: -20px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
  }
`;

const FeaturesSection = () => {
  return (
    <div className="featureSection">
      <div className="container">
        <div className="heroHeader d-flex align-items-center justify-content-center">
          <Heading>
            Discover the benefits of <span style={{ color: "#8BD6FF" }}>Web3</span>, without the complexity
          </Heading>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {CardsData.map((data, index) => {
            return (
              <div className="col-md-4 mb-4 mb-md-0 mt-4" key={index}>
                <div className="featureCard">
                  {/* <div className="featureIcon">
            <img src={data.icon} alt={data.title} />
          </div> */}
                  <div className="header mb-1">{data.title}</div>
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
