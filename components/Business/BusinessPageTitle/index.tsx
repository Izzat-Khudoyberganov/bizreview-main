import React, { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  title: string;
};

const Title = styled.h4`
  max-width: 500px;
  width: 100%;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  color: #2b273c;
  padding: 48px 0 36px;
  margin-inline: auto;
  text-align: center;
`;

const BusinessPageTitle:FC<Props> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default BusinessPageTitle;
