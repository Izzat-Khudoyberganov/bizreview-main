import Image from "next/image";
import React, { FC } from "react";
import business from "../../../img/businesspage.jpg";
import Title from "../../Title";
import { BusinessActionsList } from "../data";
import { ActionItems, ItemsText } from "../style";
import {
  ActionList,
  BusinessContainer,
  BusinessInfo,
  BusinessWraper,
  ManageBtn,
  UnlockPageText,
} from "./style";

export const BusinessInfoSection: FC = () => {
  return (
    <BusinessWraper image={business}>
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
    </BusinessWraper>
  );
};
