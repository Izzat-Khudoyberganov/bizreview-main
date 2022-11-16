import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";

interface Types {
  image: StaticImageData;
}

export const BusinessWraper = styled.section<Types>`
  background-image: url(${(props) => props.image.src});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 150px 100px;
`;
export const BusinessContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

export const BusinessInfo = styled.div`
  max-width: 540px;
  width: 100%;
  padding: 58px 34px 42px;
  background-color: #fff;
  border-radius: 5px;

  @media(max-width: 1180px){
    
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
  font: 600 100%/1.5 Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
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
