import { ArrowDown } from "@styled-icons/bootstrap"
import styled from "styled-components"

export const ContentWraper = styled.div`
  max-width: 950px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    margin: auto 0;
  }
  @media (max-width: 500px) {
    padding: 0;
    margin-top: 230px;
    align-items: flex-start;
  }
`

export const ContentTitle = styled.h1`
  max-width: 630px;
  width: 100%;
  font-size: 3rem;
  font-weight: 600;
  margin-top: 110px;
  margin-left: 30px;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-top: 0;
    margin-bottom: 20px;
    margin-left: 0;
    text-align: center;
  }
  @media (max-width: 500px) {
    margin-bottom: 10px;
    font-size: 1.8rem;
    text-align: left;
    widht: 100%;
    padding: 0;
  }
`
export const ContentSubtitle = styled.p`
  font-size: 1rem;
  text-align: justify;
  margin-left: 30px;
  max-width: 350px;
  width: 100%;
  color: #f8f8f8;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    text-align: left;
    width: 100%;
  }
`
export const ArrowDownIcon = styled(ArrowDown)`
  height: 50px;
  margin-left: 30px;
  margin-top: 20px;
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`

