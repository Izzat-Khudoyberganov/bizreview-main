import styled from "@emotion/styled";
import Image from "next/image";

export const RecourcesContainer = styled.div`
  max-width: 1180px;
  width: 100%;
  padding: 48px 32px 104px;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 30px 0 30px;
  }
`;

export const RecourcesTitle = styled.h4`
  max-width: 500px;
  width: 100%;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  color: #2b273c;
  margin-bottom: 16px;
  margin-inline: auto;
  text-align: center;
`;

export const InfoWraper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1160px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoWraperItems = styled.div`
  width: 33%;
  margin-bottom: 48px;
  padding-left: 32px;

  @media (max-width: 1160px) {
    text-align: center;
    width: 100%;
    padding-left: 0;
  }
`;

export const InfoImage = styled(Image)`
  max-width: 400px;
  width: 100%;
  object-fit: contain;
`;

export const WraperTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

export const WraperText = styled.p`
  font-size: 14px;
  text-align: center;
`;
