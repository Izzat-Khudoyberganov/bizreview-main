import styled from "styled-components"

export const BusinessInfoWraper = styled.div`
  max-width: 500px;
  width: 100%;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;

  @media (max-width: 933px) {
    align-self: center;
    margin-left: 0;
    text-align: center;
  }
`

export const InfoSubtitle = styled.p`
  color: #22b0fc;
  font-size: 1rem;

  @media (max-width: 933px) {
    display: block;
    margin: 10px auto 0;
  }
`

export const InfoText = styled.p`
  max-width: 430px;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #b8bfcd;
`
