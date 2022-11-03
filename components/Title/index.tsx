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
`
const Title: FC<Props> = ({ title }) => {
  return <MainTitle>{title}</MainTitle>
}

export default Title
