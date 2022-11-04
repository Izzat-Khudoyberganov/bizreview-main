import React, { FC } from "react"
import img from "../../img/banner_img.webp"
import mobile from "../../img/mobile-banner-img.png"
import { Content } from "../Content"
import { BannerWraper } from "./style"
import { useRouter } from "next/router"
import { en, ru } from "../../utils/translations"

export const Banner: FC = () => {
  let router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return (
    <BannerWraper image={img} mobile={mobile}>
      <Content title={t.bannerTitle} subtitle={t.bannerSubtitle} />
    </BannerWraper>
  )
}
