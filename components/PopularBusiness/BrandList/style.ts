import Image from "next/image"
import styled from "styled-components"

export const BrandListWraper = styled.section`
  margin-top: 150px;
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
  flex-wrap: wrap;
`

export const BrandBoxImage = styled(Image)`
  width: 150px;
  height: 80px;
`
