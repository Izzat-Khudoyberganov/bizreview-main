import styled from "@emotion/styled";

export const SignUpWraper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  width: 100%;
`;

export const SignUpTitle = styled.h3`
  color: red;
  font-size: 1.5rem;
  text-align: center;

  & > span {
    color: #000;
  }
`;

export const SignUpSubtitle = styled.p`
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

export const SignUpText = styled.p`
  font-size: 0.8rem;
  color: #000;
  font-weight: 400;
  text-align: center;
`;

export const Info = styled.p`
  font-size: 0.7rem;
  color: #000;
  font-weight: 400;
  text-align: center;
  width: 100%;
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
