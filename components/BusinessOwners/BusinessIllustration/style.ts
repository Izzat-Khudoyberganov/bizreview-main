import { Star } from "@styled-icons/fa-solid"
import Image from "next/image"
import styled from "styled-components"
interface Props {
  image: any
}
export const IllustrationWraper = styled.div`
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`

export const Illustration = styled.div<Props>`
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 360px;
  width: 100%;
  height: 458px;
  position: relative;
`

export const Review = styled.div`
  width: 275px;
  /* height: 100px; */
  background-color: #fff;
  color: #000;
  margin-top: 70%;
  margin-left: 120px;
  padding: 35px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
  text-align: center;

  @media (max-width: 620px) {
    margin-top: 100%;
    margin-left: 100px;
  }

  @media (max-width: 400px) {
    bottom: 0;
    width: 250px;
    margin-left: 0;
  }
`
export const ReviewTitle = styled.h3`
  color: #394457;
  font-size: 1rem;
`

export const ReviewSubtitle = styled.p`
  font-size: 0.7rem;
  line-height: 1rem;
  font-weight: 400;
  color: #bec5d1;
  margin-top: 5px;
`
export const ReviewAlert = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 50px;
  height: 50px;
  color: #fff;
  border-radius: 50%;
  background-color: #fbcb1e;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StarIcon = styled(Star)`
  color: #fff;
  width: 20px;
  height: 20px;
`

export const Pattern = styled(Image)``
