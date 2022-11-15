import React from "react";
import ads from "../../../img/ads.jpg";
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
import { AdsData } from "../data";
import Image from "next/image";
import Link from "next/link";


const Ads = () => {
  return (
    <>
      <MainWraper>
        <WraperItems>
          <ImageSection image={ads} />
        </WraperItems>
        <WraperItems>
          <InfoSection>
            <HeaderTitle>BIZREVIEW ADS</HeaderTitle>
            <InfoTitle>
              Reach more potential customers with Bizreview Ads
            </InfoTitle>
            <InfoText>
              Get in front of more customers when they’re searching for local
              businesses like yours.
            </InfoText>
            {AdsData.map((el, i) => (
              <ActionItems key={i}>
                <Image src={el.icon} width={40} height={40} alt={el.title} />
                <ItemsText>{el.title}</ItemsText>
              </ActionItems>
            ))}
            <Link href="/" style={{ marginTop: "24px" }}>
              <LearnMoreLink>Learn more</LearnMoreLink>
            </Link>
          </InfoSection>
        </WraperItems>
      </MainWraper>
    </>
  );
};

export default Ads;
