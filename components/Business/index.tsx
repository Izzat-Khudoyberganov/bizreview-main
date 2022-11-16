import React from "react";
import { Ads } from "./Ads";
import { BusinessPage } from "./BusinessPage";
import { Connect } from "./Connect";
import { Recources } from "./Recources";
import { Solutions } from "./Solutions";
import { Market } from "./Market";
import { BusinessInfoSection } from "./BusinessInfoSection";
import { BusinessPageWraper } from "./style";
import { BusinessInfoBox } from "./BusinessInfoSection/BusinessInfoBox";

const Business = () => {
  return (
    <>
      <BusinessInfoSection />
      <BusinessInfoBox />
      <BusinessPageWraper>
        <Recources />
        <BusinessPage />
        <Ads />
        <Connect />
      </BusinessPageWraper>
      <Solutions />
      <Market />
    </>
  );
};

export default Business;
