import React, { FC } from "react"
import { useRouter } from "next/router"
import { en, ru } from "../../../../utils/translations"
import { EmailFormButton, EmailFormInput, EmailFormWraper } from "./style"

export const EmailForm: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return (
    <EmailFormWraper>
      <EmailFormInput type='email' placeholder={t.email} />
      <EmailFormButton>{t.getListed}</EmailFormButton>
    </EmailFormWraper>
  )
}
