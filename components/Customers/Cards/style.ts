import Image from "next/image"
import styled from "styled-components"

export const CardImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`

export const CardWraper = styled.div`
  max-width: 390px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
  }
`

export const Comment = styled.p`
  width: 230px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  gap: 20px;
  height: 100%;
`
export const AuthInfo = styled.span`
  font-size: 0.8rem;
  margin-top: auto;
  color: #a8b1c1;
`
