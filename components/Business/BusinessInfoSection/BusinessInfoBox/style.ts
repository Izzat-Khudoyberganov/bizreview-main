import styled from "styled-components";

export const BusinessInfo = styled.div`
  max-width: 540px;
  width: 100%;
  padding: 34px 42px;
  background-color: #fff;
  border-radius: 5px;
  display: none;

  @media (max-width: 1180px) {
    display: block;
    margin-inline: auto;
    transform: translateY(-60px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding-bottom: 34px;
  }

  @media (max-width: 620px) {
    padding: 20px;
    transform: translateY(-70px);
  }
`;

export const ActionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 620px) {
    padding: 15px 0;
  }
`;

export const UnlockPageText = styled.p`
  color: #2b273c;
  margin-top: 20px;
  font-size: 1.5rem;

  @media (max-width: 620px) {
    margin-top: 0;
  }
`;

export const ManageBtn = styled.button`
  font-weight: 500;
  background-color: #0d182e;
  color: #fff;
  padding: 15px 25px;
  margin-top: 25px;
  transition: 0.3s ease;

  &:hover {
    background-color: #0d187a;
  }
`;
