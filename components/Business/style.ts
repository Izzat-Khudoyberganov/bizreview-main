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
`;
export const ActionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const ActionItems = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const ItemsText = styled.p`
  font-size: 18px;
  line-height: 26px;
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

// Template items

export const BusinessPageWraper = styled.section`
  max-width: 1180px;
  width: 100%;
  padding: 0 20px;
  margin-inline: auto;
`;

export const MainWraper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 933px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const WraperItems = styled.div`
  flex-basis: 50%;

  @media(max-width: 933px) {
    width: 75%;
  }
`;
export const ImageSection = styled.div<Types>`
  background-image: url(${(props) => props.image.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;

  @media(max-width: 933px) {
    width: 100%;
  }
`;
export const InfoSection = styled.div`
  width: 100%;
  padding: 36px 0 24px 32px;

  @media(max-width: 933px) {
    padding: 36px 0;
  }
`;
export const HeaderTitle = styled.p`
  text-transform: uppercase;
  color: rgb(194, 164, 161);
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const InfoTitle = styled.h4`
  max-width: 500px;
  width: 100%;
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  color: #2b273c;
  margin-bottom: 24px;
  text-align: left;
`;

export const InfoText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

export const LearnMoreLink = styled.a`
  display: block;
  margin-top: 24px;
  color: #2b273c;
  font-size: 18px;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const TrueIcon = styled(Image)`
  flex-shrink: 0;
`