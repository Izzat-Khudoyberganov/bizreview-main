import React from "react";
import connect from "../../../img/connect.jpg";
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
import { AdsData, ConnectData } from "../data";
import Image from "next/image";
import Link from "next/link";

const Connect = () => {
  return (
    <>
      <MainWraper>
        <WraperItems>
          <ImageSection image={connect} />
        </WraperItems>
        <WraperItems>
          <InfoSection>
            <HeaderTitle>BIZREVIEW CONNECT</HeaderTitle>
            <InfoTitle>
              Bring your business to life with Bizreview Connect
            </InfoTitle>
            <InfoText>
              Bizreview Connect lets you post regular updates so you can help
              potential customers learn more about your business.
            </InfoText>
            {ConnectData.map((el, i) => (
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

export default Connect;
