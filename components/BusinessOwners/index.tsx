import React, { FC } from "react"
import Container from "../../Layout/Container"
import { BusinessIllustration } from "./BusinessIllustration"
import { BusinessInfo } from "./BusinessInfo"
import { BusinessOwnersWraper } from "./style"

export const BusinessOwners: FC = () => {
  return (
    <Container>
      <BusinessOwnersWraper>
        <BusinessIllustration />
        <BusinessInfo />
      </BusinessOwnersWraper>
    </Container>
  )
}
