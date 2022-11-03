import React from "react"
import { useRouter } from "next/router"
import { en, ru } from "../../../utils/translations"
import google from "../../../img/google.png"
import amazon from "../../../img/Amazon.png"
import angies from "../../../img/Anglies.png"
import facebook from "../../../img/facebook.png"
import yelp from "../../../img/yelp.png"
import Image from "next/image"
import {
  BrandBox,
  BrandBoxImage,
  BrandListTitle,
  BrandListWraper,
} from "./style"

const BrandList = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return (
    <BrandListWraper>
      <BrandListTitle>{t.support}</BrandListTitle>
      <BrandBox>
        <BrandBoxImage src={google} />
        <BrandBoxImage src={amazon} />
        <BrandBoxImage src={angies} />
        <BrandBoxImage src={facebook} />
        <BrandBoxImage src={yelp} />
      </BrandBox>
    </BrandListWraper>
  )
}

export default BrandList
