import styled from "styled-components";

export const LoginWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 15px;
  padding-bottom: 30px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;

  @media(max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 0;
  }
`;

export const LoginTitle = styled.h4`
  color: red;
  font-size: 1.5rem;
  text-align: center;

  & > span {
    color: #000;
  }
`;

export const SignUpTitle = styled.span`
  font-size: 1.2rem;
  & > span {
    color: red;
    margin-left: 5px;
  }
`;
export const PrivacyText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;

export const AlternativeElement = styled.h4`
  font-size: 1rem;
  width: 100%;
  color: #555;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    width: 40%;
    height: 0.2px;
    background-color: #999;
    position: absolute;
    left: 0;
    top: 50%;
  }

  &::after {
    content: "";
    width: 40%;
    height: 0.2px;
    background-color: #999;
    position: absolute;
    right: 0;
    top: 50%;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EmailInput = styled.input`
  display: block;
  width: 100%;
  padding: 9px;
  border: 1px solid #444;
  border-radius: 2px;
  background-color: transparent;
`;

export const PasswordInput = styled.input`
  display: block;
  width: 100%;
  padding: 9px 4px;
  border: 1px solid #444;
  border-radius: 2px;
  background-color: transparent;
`;

export const LoginBtn = styled.button`
max-width: 320px;
  width: 100%;
  height: 40px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 8px;
`;

export const ForgetPasswordLink = styled.a`
  margin-left: auto;
  color: #0d182e;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SignUpRow = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;
