import React, { FC } from "react"
import { useRouter } from "next/router"
import { en, ru } from "../../../utils/translations"
import operator from "../../../img/operator.png"
import {
  Illustration,
  Review,
  ReviewAlert,
  ReviewSubtitle,
  ReviewTitle,
  StarIcon,
} from "./style"

export const BusinessIllustration: FC = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return (
    <Illustration image={operator}>
      <Review>
        <ReviewTitle>{t.reviewAlert} 🎉 </ReviewTitle>
        <ReviewSubtitle>{t.time}</ReviewSubtitle>
        <ReviewAlert>
          <StarIcon />
        </ReviewAlert>
      </Review>
    </Illustration>
  )
}
