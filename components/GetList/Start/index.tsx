import React, { FC } from "react";
import { ButtonSecondary } from "../../Button";
import { ListFormContainer, ListFormWraper } from "../style";
import { StartTitle } from "./style";

const title: string =
  "Ready to get started? It’s free, easy, and only takes a few minutes.";
const Start: FC = () => {
  return (
    <ListFormWraper>
      <ListFormContainer>
        <StartTitle>{title}</StartTitle>
        <ButtonSecondary
          style={{ marginTop: "40px", display: "block", margin: "0 auto" }}
        >
          Manage my free listing
        </ButtonSecondary>
      </ListFormContainer>
    </ListFormWraper>
  );
};

export default Start;
