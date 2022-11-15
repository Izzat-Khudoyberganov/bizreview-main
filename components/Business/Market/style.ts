import styled from "@emotion/styled";
import Image from "next/image";

export const MarketWraper = styled.section`
  padding: 48px 32px 104px;
`;
export const ProWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`;
export const ProWraperItems = styled.div`
  max-width: 340px;
  width: 100%;
  border-radius: 0px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

export const ProImage = styled(Image)`
  width: 100%;
  height: auto;
`;
export const ProTitle = styled.h4`
  width: 100%;
  font-size: 1rem;
`;
