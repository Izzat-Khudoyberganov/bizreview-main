import React, { FC } from "react";
import {
  InfoImage,
  InfoWraper,
  InfoWraperItems,
  RecourcesContainer,
  WraperText,
  WraperTitle,
} from "./style";
import { RecourcesData } from "./data";
import {BusinessPageTitle} from "../BusinessPageTitle";

const title =
  "Bizreview for Business has resources to help you plan, start, grow, and advertise your small business";

export const Recources:FC = () => {
  return (
    <RecourcesContainer>
      <BusinessPageTitle title={title} />
      <InfoWraper>
        {RecourcesData.map((el, i) => (
          <InfoWraperItems key={i}>
            <InfoImage src={el.img} width={400} height={200} />
            <WraperTitle>{el.title}</WraperTitle>
            <WraperText>{el.text}</WraperText>
          </InfoWraperItems>
        ))}
      </InfoWraper>
    </RecourcesContainer>
  );
};
