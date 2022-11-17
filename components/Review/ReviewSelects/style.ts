import styled from "styled-components";

export const ReviewSelectsWraper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 933px) {
    flex-direction: column;
  }
`;
export const SearchReviewsPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  width: 100%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;

  @media (max-width: 933px) {
    flex-direction: column;
  }
`;

export const ReviewSelect = styled.select`
  border: none;
  background-color: transparent;
  appearance: unset;
  &:focus {
    outline: none;
  }

  & > option {
    margin-top: 10px;
  }
`;

export const SearchButton = styled.button`
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #0d182e;
  color: #fff;
  height: 100%;

  @media(max-width: 933px) {
    width: 150px;
    border-radius: 4px;
    margin-inline: auto;
    margin-top: 20px;
  }
`;
