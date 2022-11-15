import React from "react";
import BusinessPageTitle from "../BusinessPageTitle";
import mobilebiz from "../../../img/mobilebiz.jpg";
import {
  ActionItems,
  HeaderTitle,
  ImageSection,
  InfoSection,
  InfoText,
  InfoTitle,
  ItemsText,
  LearnMoreLink,
  MainWraper,
  WraperItems,
} from "../style";
import { BusinessPageData } from "../data";
import Image from "next/image";
import Link from "next/link";

const title =
  "bizreview makes it easy to connect with new customers and grow your business";

const BusinessPage = () => {
  return (
    <>
      <BusinessPageTitle title={title} />
      <MainWraper>
        <WraperItems>
          <ImageSection image={mobilebiz} />
        </WraperItems>
        <WraperItems>
          <InfoSection>
            <HeaderTitle>BUSINESS PAGE</HeaderTitle>
            <InfoTitle>Help people get to know you</InfoTitle>
            <InfoText>
              Having a strong presence on Yelp helps you establish trust with
              potential customers. Manage your page for free or upgrade to stand
              out from the competition.
            </InfoText>
            {BusinessPageData.map((el, i) => (
              <ActionItems key={i}>
                <Image src={el.icon} width={40} height={40} alt={el.title} />
                <ItemsText>{el.title}</ItemsText>
              </ActionItems>
            ))}
            <Link href="/" style={{marginTop: "24px"}}>
                <LearnMoreLink>Learn more</LearnMoreLink>
            </Link>
          </InfoSection>
        </WraperItems>
      </MainWraper>
    </>
  );
};

export default BusinessPage;
