import styled from "@emotion/styled";
import Image from "next/image";

export const SolutionsWraper = styled.section`
  width: 100%;
  background-color: #f5fafd;
  padding: 100px 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
`;
export const GridItems = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
`;
export const ItemImage = styled(Image)`
  flex-shrink: 0;
  flex-shrink: 0;
`;

export const ItemInfo = styled.div`
  display: block;
`;
export const ItemInfoTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ItemInfoText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const LearnMore = styled.a`
  margin-block: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
