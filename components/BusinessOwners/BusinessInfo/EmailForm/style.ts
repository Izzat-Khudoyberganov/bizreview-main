import styled from "styled-components"

export const EmailFormWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 90px;
  box-shadow: #e3ecf0 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -15px;
  width: 490px;
  height: 100px;
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
`
export const EmailFormButton = styled.button`
  width: 30%;
  height: 100px;
  display: block;
  text-align: center;
  text-transform: uppercase;
  background: #00a6ff;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
`
