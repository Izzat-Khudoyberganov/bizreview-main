import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"
import styled from "styled-components"
import roofing from "../../../img/roofing.jpg"
import electrican from "../../../img/electrican-services.jpg"
import phone from "../../../img/phone-repair.jpg"


const TabsContainer = styled.div`
  display: flex;
  gap: 30px;

  @media(max-width: 768px) {
   flex-wrap:wrap;
   justify-content: center;
   align-items: center;
  }

`
const TabCard = styled.div`
  width: 255px;
  /* height: 305px; */
  box-shadow: rgba(219, 203, 203, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    cursor: pointer;
  }

`
const TabCardWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`

const TabCardReview = styled.p`
  color: #96a0b4;
  font-size: 12px;
`

const TabCardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #384357;
`
const TabOne: FC = () => {
  return (
    <TabsContainer>
      <TabCard>
        <Image src={roofing} width={255} height={170} layout='responsive' />
        <TabCardWraper>
          <TabCardTitle>Bens Fast Food</TabCardTitle>
          <TabCardReview>96 reviews</TabCardReview>
          <TabCardReview> 125 3rd St, San Francisco, CA 94103</TabCardReview>
          <TabCardReview>(415) 644-8377</TabCardReview>
        </TabCardWraper>
      </TabCard>
      <TabCard>
        <Image src={electrican} width={255} height={170} layout='responsive' />
        <TabCardWraper>
          <TabCardTitle>Bens Fast Food</TabCardTitle>
          <TabCardReview>96 reviews</TabCardReview>
          <TabCardReview> 125 3rd St, San Francisco, CA 94103</TabCardReview>
          <TabCardReview>(415) 644-8377</TabCardReview>
        </TabCardWraper>
      </TabCard>
      <TabCard>
        <Image src={phone} width={255} height={170} layout='responsive' />
        <TabCardWraper>
          <TabCardTitle>Bens Fast Food</TabCardTitle>
          <TabCardReview>96 reviews</TabCardReview>
          <TabCardReview> 125 3rd St, San Francisco, CA 94103</TabCardReview>
          <TabCardReview>(415) 644-8377</TabCardReview>
        </TabCardWraper>
      </TabCard>
    </TabsContainer>
  )
}
export default TabOne
