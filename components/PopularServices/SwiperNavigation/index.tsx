import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  title: string
}

const PrevButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f1f1f1;
  color: #000;
`
const SwiperNavigation: FC<Props> = ({ title }) => {
  return (
    <>
      <PrevButton>{title}</PrevButton>
    </>
  )
}

export default SwiperNavigation
