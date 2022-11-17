import styled from "@emotion/styled";
import Link from "next/link";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
export const NameForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px; ;
`;
export const NameInput = styled.input`
  display: block;
  width: 100%;
  padding: 5px;
  border: 1px solid #444;
  border-radius: 2px;
  background-color: transparent;
`;

export const DefaultInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #444;
  border-radius: 2px;
  background-color: transparent;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const OptionalText = styled.p`
  margin-top: 5px;
  font-size: 0.8rem;
  color: #000;
  font-weight: 600;

  & > span {
    color: #999;
    font-weight: 400;
  }
`;

export const SelectOptions = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  gap: 10px;

  & > select {
    width: 100px;
  }
`;
export const DefaultSelect = styled.select`
  width: 100%;
  padding: 5px;
`;

export const SignUpBtn = styled.button`
  margin-top: 10px;
  font-weight: 600;
  width: 100%;
  border-radius: 2px;
  background-color: red;
  color: #fff;
  border-radius: 2px solid red;
  padding: 10px 20px;
`;

export const LinkText = styled.p`
  font-size: 0.8rem;
  color: #999;
  display: block;
  text-align: right;
  margin-top: 10px;
`;
export const LinkToLogin = styled(Link)`
  & > a {
    color: red;
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
