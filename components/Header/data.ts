import { List, RateReview } from "@styled-icons/material-outlined"
import { Building2 } from "@styled-icons/remix-fill"
import styled from "styled-components"

export const RateReviewIcon = styled(RateReview)``
export const ListIcon = styled(List)``
export const BuildIcon = styled(Building2)``
export const data = [
  {
    id: 0,
    name: "Write a review",
    link: "/review",
    icon: RateReviewIcon,
  },
  {
    id: 1,
    name: "Get listed",
    link: "/getlists",
    icon: ListIcon,
  },
  {
    id: 2,
    name: "Company",
    link: "/company",
    icon: BuildIcon,
  },
]
