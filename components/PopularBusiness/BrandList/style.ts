import Image from "next/image"
import styled from "styled-components"

export const BrandListWraper = styled.section`
  margin-top: 150px;

  @media(max-width: 930px) {
    margin-top: 100px;
  }
  @media(max-width: 768px) {
    margin-top: 30px;
  }
`

export const BrandListTitle = styled.h4`
  color: #c0c5d1;
  font-size: 0.8rem;
  text-align: center;
`
export const BrandBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const BrandBoxImage = styled(Image)`
  width: 150px;
  height: 80px;

  @media (max-width: 600px) {
    width: 100px;
    height: 40px;
  }
`
