import React from "react";
import {Ads} from "./Ads";
import {BusinessPage} from "./BusinessPage";
import {Connect} from "./Connect";
import {Recources} from "./Recources";
import {Solutions} from "./Solutions";
import {Market} from "./Market";
import { BusinessPageWraper } from "./style";
import { BusinessInfoSection } from "./BusinessInfo";

const Business = () => {
  return (
    <>
      {/* <BusinessInfoSection /> */}
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
