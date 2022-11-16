import styled from "styled-components";

export const BusinessInfo = styled.div`
  max-width: 540px;
  width: 100%;
  padding: 34px 42px;
  background-color: #fff;
  border-radius: 5px;
  display: none;

  @media(max-width: 1180px){
    /* position: absolute; */
    display: block;
    margin-inline: auto;
  }
`;

export const ActionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const UnlockPageText = styled.p`
  color: #2b273c;
  margin-top: 20px;
  font-size: 1.5rem;
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
