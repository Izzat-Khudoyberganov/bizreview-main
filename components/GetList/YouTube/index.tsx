import React, { FC } from "react";
import {
  AuthAddress,
  AuthFeedback,
  Feedback,
  HeaderElements,
  HeaderTitle,
  VideoBlock,
  YouTubeHeader,
  YouTubeWraper,
} from "./style";

const title: string =
  "See how The Pod Photography captures new clients with Yelp";
const feedback: string =
  " “I didn’t have a lot of time for marketing and Yelp was the easy way to do it.”";
const auth: string = "Erika Seress, The Pod Photography";
const address:string = "Culver City, CA"

const YouTube: FC = () => {
  return (
    <YouTubeWraper>
      <YouTubeHeader>
        <HeaderElements>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderElements>
        <HeaderElements>
          <Feedback>{feedback}</Feedback>
          <AuthFeedback>{auth}</AuthFeedback>
          <AuthAddress>{address}</AuthAddress>
        </HeaderElements>
      </YouTubeHeader>
      <VideoBlock>
        <iframe
          height="100%"
          src="https://www.youtube.com/embed/PkZNo7MFNFg"
          title="Learn JavaScript - Full Course for Beginners"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoBlock>
    </YouTubeWraper>
  );
};

export default YouTube;
