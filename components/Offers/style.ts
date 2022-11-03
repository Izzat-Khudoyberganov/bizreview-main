import styled from "styled-components"
import { SwiperSlide } from "swiper/react"

interface Props {
  image: any
}

export const OffersWraper = styled.div`
  padding: 100px 0;
  background-color: #f5fafd;
`

export const OffersContainer = styled.div`
  width: 850px;
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
  height: 165px;
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
