import React from "react";
import Image from "next/image";
import business from "../../img/businesspage.jpg";
import Title from "../Title";
import Ads from "./Ads";
import BusinessPage from "./BusinessPage";
import Connect from "./Connect";
import { BusinessActionsList } from "./data";
import Recources from "./Recources";
import {
  ActionItems,
  ActionList,
  BusinessContainer,
  BusinessInfo,
  BusinessPageWraper,
  BusinessWraper,
  ItemsText,
  ManageBtn,
  UnlockPageText,
} from "./style";

const Business = () => {
  return (
    <>
      {/* <BusinessWraper image={business}>
        <BusinessContainer>
          <BusinessInfo>
            <Title title="Its free to be on bizreview" />
            <ActionList>
              {BusinessActionsList.map((el, i) => (
                <ActionItems key={i}>
                  <Image src={el.icon} width={40} height={40} alt={el.title} />
                  <ItemsText>{el.title}</ItemsText>
                </ActionItems>
              ))}
            </ActionList>
            <UnlockPageText>Unlock your free page in minutes.</UnlockPageText>
            <ManageBtn>Manage my free listing</ManageBtn>
          </BusinessInfo>
        </BusinessContainer>
      </BusinessWraper> */}
      <BusinessPageWraper>
        <Recources />
        <BusinessPage />
        <Ads />
        <Connect/>
      </BusinessPageWraper>
    </>
  );
};

export default Business;
