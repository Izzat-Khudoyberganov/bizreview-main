import React, { FC } from "react"
import { useRouter } from "next/router"
import { en, ru } from "../../utils/translations"
import Container from "../../Layout/Container"
import Title from "../Title"
import BrandList from "./BrandList"
import Tabs from "./Tabs"
import { PopularBusinessWraper } from "./style"

export const PopularBusiness: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return (
    <PopularBusinessWraper>
      <Container>
        <Title title={t.popularBusiness} />
        <Tabs />
        <BrandList />
      </Container>
    </PopularBusinessWraper>
  )
}
