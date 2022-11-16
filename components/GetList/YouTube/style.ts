import styled from "styled-components";

export const YouTubeWraper = styled.section`
  padding: 60px 0;
  height: fit-content;
`;
export const YouTubeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 933px) {
    flex-direction: column;
  }
`;

export const HeaderElements = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;

  @media(max-width: 933px) {
    width: 100%;
  }
`;
export const HeaderTitle = styled.h4`
  width: 100%;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  color: #2b273c;
  margin-inline: auto;
`;

export const Feedback = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
`;

export const AuthFeedback = styled.p`
  font-size: 1rem;
  color: #000;
  font-weight: 500;
`;

export const AuthAddress = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const VideoBlock = styled.div`
  width: 100%;
  height: 700px;
  object-fit: cover;

  @media(max-width: 933px) {
    height: 550px;
  } 
  @media(max-width: 768px) {
    height: 450px;
  }
  @media(max-width: 620px) {
    height: 350px;
  }

  & > iframe {
    width: 100%;
    border: none;
  }
`;
