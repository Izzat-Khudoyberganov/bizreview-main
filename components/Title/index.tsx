import styled from "styled-components"
import React, { FC } from "react"

type Props = {
  title: string
}
const MainTitle = styled.h3`
  font-size: 3rem;
  color: #19263e;
  max-width: 450px;
  width: 100%;
  font-weight: 500;
  margin-bottom: 30px;

  @media (max-width: 933px) {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  @media(max-width: 620px) {
    font-size: 1.8rem;
  }
`
const Title: FC<Props> = ({ title }) => {
  return <MainTitle>{title}</MainTitle>
}

export default Title
