import styled from "styled-components";

export const ReviewWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 48px 0;

  @media(max-width: 933px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media(max-width: 933px) {
    text-align: center;
  }
`;

export const ReviewTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  max-width: 600px;
  width: 100%;

  @media(max-widht: 933px) {
    display: block;
    text-align: center;
  }

`;

export const ReviewSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  max-width: 600px;
  width: 100%;
`;

export const ReviewIllustration = styled.div`
  padding: 32px 0;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

 
`;
export const ReviewIllustrationTitle = styled.h4`
  margin-top: 50px;
  font-size: 2rem;
  font-weight: 500;
  text-align: left;

  @media(max-width: 933px) {
    text-align: center;
  }
`;
