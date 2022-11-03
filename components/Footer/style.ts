import Link from "next/link"
import styled from "styled-components"

export const FooterWraper = styled.section`
  background-color: #fff;
  padding: 100px 0;
`

export const FooterRows = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const ColumnTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`
export const FooterLink = styled(Link)`
  color: #b5bcca;
`
export const FooterColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 15px;
`
export const Info = styled.p`
  width: 250px;
`
