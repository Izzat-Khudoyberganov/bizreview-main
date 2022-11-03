import styled from "@emotion/styled"
import React from "react"
import { useRouter } from "next/router"
import { en, ru } from "../../../utils/translations"

const Button = styled.button`
  background-color: #00a6ff;
  color: #fff;
  font-size: 1.2rem;
  width: 260px;
  height: 100px;
  display: block;
`
const SearchBtn = () => {
  let router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return <Button>{t.findBusiness}</Button>
}

export default SearchBtn
