import Link from "next/link";
import styled from "styled-components";

export const FooterWraper = styled.section`
  background-color: #fff;
  padding: 100px 0;

  @media (max-width: 850px) {
   padding: 50px 0 100px;
  }

  @media (max-width: 500px) {
   padding: 25px 0 100px;
  }
`;

export const FooterRows = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 850px) {
   display: none;
  }
`;
export const ColumnTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
export const FooterLink = styled(Link)`
  color: #b5bcca;
`;
export const FooterColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 15px;
`;
export const Info = styled.p`
  width: 250px;
`;
