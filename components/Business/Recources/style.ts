import styled from "@emotion/styled";
import Image from "next/image";

export const RecourcesContainer = styled.div`
  max-width: 1180px;
  width: 100%;
  padding: 48px 32px 104px;
  margin: 0 auto;

  @media(max-width: 1180px) {
    padding-top: 0;
  }

  @media (max-width: 500px) {
    padding: 0px 0 30px;
  }
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
