import React, { FC } from "react";
import { alignItems, justifyContent } from "styled-system";
import {
  ReviewSelect,
  ReviewSelectsWraper,
  SearchButton,
  SearchReviewsPanel,
} from "./style";

type Props = {
  data: any;
};

const ReviewSelects: FC<Props> = ({ data }) => {
  const item = Object.values(data);
  return (
    <ReviewSelectsWraper>
      <SearchReviewsPanel>
        <ReviewSelect name="" id="">
        <option value="" selected disabled hidden>
            Try lunch, yoga studio, plumber
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
        </ReviewSelect>
        <ReviewSelect name="" id="">
          <option value="" selected disabled hidden>
            San Francisco, CA
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
        </ReviewSelect>
      </SearchReviewsPanel>{" "}
      <SearchButton type="submit">Search</SearchButton>
    </ReviewSelectsWraper>
  );
};

export default ReviewSelects;
