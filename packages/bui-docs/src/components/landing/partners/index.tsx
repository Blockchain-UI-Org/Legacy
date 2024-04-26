import React from "react";
import { Container, Partner, Partners } from "../styled";
import { Icon as Iconify } from "@iconify/react";

const PartnersSection = () => {
  return (
    <Container>
      <Partners>
        <div className="header" style={{ marginTop: "30px" }}>
          Our Partners
        </div>

        <div>ddd</div>
        <img width={30} height={30} src="/img/nft2.png" />
        <Iconify icon={"/img/nft3.png"} />
        <Partner src="/img/coinbase.svg" />
        <img width={30} height={30} src="/img/nft2.png" />
        <Partner width={14} height={14} src="/assets/circle.svg" />
        <Partner src="/img/nft2.png" />
        <Partner src="/img/nft2.png" />
      </Partners>
    </Container>
  );
};

export default PartnersSection;
