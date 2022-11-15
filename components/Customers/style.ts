import styled from "styled-components"

export const CustomersBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
  }
`
export const CustomersWraper = styled.section`
  padding: 100px 0;
  background-color: #f5fafd;
  width: 100%;

  @media (max-width: 830px) {
    padding: 50px 0;
  }
`
export const WrapperBlockOne = styled.div`
  display: grid;
  grid-row-gap: 30px;
  grid-auto-rows: auto auto auto;

  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const WrapperBlockTwo = styled.div`
  display: grid;
  grid-row-gap: 30px;
  padding-top: 100px;
  grid-auto-rows: auto 1fr auto;
  width: 440px;

  @media (max-width: 830px) {
    width: 100%;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`
export const WrapperLink = styled.p`
  color: #b3bcca;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
`
