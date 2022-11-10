import styled from "styled-components"

export const EmailFormWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 90px;
  box-shadow: #e3ecf0 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -15px;
  max-width: 490px;
  width: 100%;
  height: 100px;

  @media (max-width: 933px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    height: 100%;
    margin-top: 30px;
  }
`

export const EmailFormInput = styled.input`
  width: 70%;
  height: 100%;
  padding: 40px;
  border: none;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 933px) {
    width: calc(100% - 30px);
    margin: 0 15px;
  }
`
export const EmailFormButton = styled.button`
  width: 30%;
  height: 100px;
  display: block;
  text-align: center;
  text-transform: uppercase;
  background: #00a6ff;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;

  @media (max-width: 933px) {
    width: 100%;
    padding: 15px auto;
    margin-top: 30px;
  }
`
