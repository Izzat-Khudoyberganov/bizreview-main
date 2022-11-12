import styled from "@emotion/styled";

export const SignUpBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export const FacebookBtn = styled.button`
  width: 100%;
  border-radius: 2px;
  background-color: #4267b2;
  color: #fff;
  padding: 10px 20px;
  transition: 0.3s ease;

  &:hover {
    background-color: #4267a1;
  }
`;

export const GoogleBtn = styled.button`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 10px 20px;
`;

export const AppleBtn = styled.button`
  width: 100%;
  border-radius: 2px;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  transition: 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;
