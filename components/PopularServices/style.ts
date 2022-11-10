import styled from "styled-components"
import { NavigateNext } from "@styled-icons/material"
import { SwiperSlide } from "swiper/react"

export const PopularServicesWraper = styled.div`
  width: 100%;
  background-color: #f5fafd;
  padding: 50px 0;

  @media(max-width: 640px) {
    padding: 0;
  }
`
export const ServiceWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 933px) {
    margin-top: 75px;
  }
`

export const SwiperNavigation = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
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
export const NextIcon = styled(NavigateNext)`
  width: 100px;
`
