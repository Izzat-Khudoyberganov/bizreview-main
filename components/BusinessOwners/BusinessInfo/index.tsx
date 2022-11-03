import React, { FC } from "react"
import Title from "../../Title"
import { EmailForm } from "./EmailForm"
import { BusinessInfoWraper, InfoSubtitle, InfoText } from "./style"
import { useRouter } from "next/router"
import { en, ru } from "../../../utils/translations"

export const BusinessInfo: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return (
    <BusinessInfoWraper>
      <InfoSubtitle>{t.joinText}</InfoSubtitle>
      <Title title={t.businessOwnersTitle} />
      <InfoText>{t.businessOwnersSubtitle}</InfoText>
      <EmailForm />
    </BusinessInfoWraper>
  )
}
