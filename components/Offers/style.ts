import { NavigateNext } from "@styled-icons/material-outlined"
import styled from "styled-components"
import { SwiperSlide } from "swiper/react"

interface Props {
  image: any
}

export const OffersWraper = styled.div`
  width: 100%;
  padding: 100px 0;
  background-color: #f5fafd;
`

export const NextIcon = styled(NavigateNext)`
  width: 20px;
  height: 20px;
  color: red;
`

export const OffersContainer = styled.div`
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SwiperItemCards = styled(SwiperSlide)<Props>`
  background-image: url(${(props) => props.image.src});
  background-position: center center;
  background-size: cover;
  width: 250px !important;
  display: inline-block;
  /* height: 165px; */
  margin: 0 auto;
  padding: 20px;
  transition: 0.4s ease;
  &:hover {
    cursor: pointer;
  }
`
export const SwiperSubtitle = styled.p`
  padding: 5px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  display: inline-block;
`
export const SwiperTitle = styled.h4`
  margin-top: 58px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2rem;
  margin-bottom: 5px;
`
export const SwiperText = styled.small`
  font-size: 0.8rem;
  color: #f1f1f1;
  font-weight: 600;
`
export const SwiperNavigation = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 860px) {
    display: none;
  }
`

export const SwiperCards = styled(SwiperSlide)`
  margin: 10px;
  width: 250px;
  height: 220px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 120px;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all 0.4s ease;
  &:hover {
    background-color: #ffd600;
    cursor: pointer;
  }
`

export const ButtonNext = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #000;
  border: 1px solid #dbe4ea;
`

export const ButtonPrev = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #000;
  border: 1px solid #dbe4ea;
`
