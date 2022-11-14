import Image from "next/image";
import React, { FC } from "react";
import ReviewSelects from "./ReviewSelects";
import like from "../../img/like.svg";
import review from "../../img/write-review.svg"
import { ReviewIllustration, ReviewIllustrationTitle, ReviewInfo, ReviewSubtitle, ReviewTitle, ReviewWraper } from "./style";

const Review: FC = () => {
  return (
    <>
      <ReviewWraper>
        <ReviewInfo>
          <ReviewTitle>Find a business to review</ReviewTitle>
          <ReviewSubtitle>
            Review anything from your favorite patio spot to your local flower
            shop.
          </ReviewSubtitle>
          <ReviewSelects data={"JJBJH"} />
        </ReviewInfo>
        <Image src={review} width={300} height={150} alt="img"/>
      </ReviewWraper>
      <ReviewIllustrationTitle>Visited one of these places recently?</ReviewIllustrationTitle>
      <ReviewIllustration>
        <Image src={like} width="200" height="200" />
        <p>
          We're out of suggestions for you right now. Keep on using Yelp and
          we'll have some more for you soon.
        </p>
      </ReviewIllustration>
    </>
  );
};

export default Review;
