import React, { FC } from "react";
import Link from "next/link";
import connect from "../../../img/connect.jpg";
import { ConnectData } from "../data";
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
  TrueIcon,
  WraperItems,
} from "../style";

export const Connect: FC = () => {
  return (
    <React.Fragment>
        <WraperItems>
          <ImageSection image={connect} />
        </WraperItems>
        <WraperItems>
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
                <TrueIcon src={el.icon} width={40} height={40} alt={el.title} />
                <ItemsText>{el.title}</ItemsText>
              </ActionItems>
            ))}
            <Link href="/" style={{ marginTop: "24px" }}>
              <LearnMoreLink>Learn more</LearnMoreLink>
            </Link>
        </WraperItems>
    </React.Fragment>
  );
};
