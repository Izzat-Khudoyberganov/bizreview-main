import Link from "next/link"
import styled from "styled-components"

export const MobileNavWraper = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f1f1f1;
  display: none;

  @media (max-width: 933px) {
    display: flex;
  }
`

export const MobileNavButton = styled.button`
  background-color: transparent;
  font-size: 1rem;
  padding: 0 !important;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`
export const MobileNavLinks = styled.a`
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`
