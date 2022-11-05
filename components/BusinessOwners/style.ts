import styled from "styled-components"

export const BusinessOwnersWraper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 130px 0;

  @media (max-width: 933px) {
    flex-direction: column-reverse;
    column-gap: 20px;
    padding: 0 0 30px;
  }
`
