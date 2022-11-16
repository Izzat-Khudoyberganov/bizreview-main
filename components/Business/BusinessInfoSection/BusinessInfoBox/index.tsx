import React, { FC } from "react";
import Image from "next/image";
import Title from "../../../Title";
import { BusinessActionsList } from "../../data";
import { ActionItems, ItemsText } from "../../style";
import { ActionList, BusinessInfo, ManageBtn, UnlockPageText } from "./style";

export const BusinessInfoBox: FC = () => {
  const title: string = "Its free to be on bizreview";
  const unlockText: string = "Unlock your free page in minutes.";
  const btnText: string = "Manage my free listing";

  return (
    <BusinessInfo>
      <Title title={title} />
      <ActionList>
        {BusinessActionsList.map((el, i) => (
          <ActionItems key={i}>
            <Image src={el.icon} width={40} height={40} alt={el.title} />
            <ItemsText>{el.title}</ItemsText>
          </ActionItems>
        ))}
      </ActionList>
      <UnlockPageText>{unlockText}</UnlockPageText>
      <ManageBtn>{btnText}</ManageBtn>
    </BusinessInfo>
  );
};
