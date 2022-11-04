import React from "react"
import { Input, SearchIcon, Searchwraper } from "./style"
import { useRouter } from "next/router"
import { en, ru } from "../../../utils/translations"

const SearchInput = () => {
  let router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  return (
    <Searchwraper>
      <SearchIcon />
      <Input type='text' placeholder={t.searchInputText} />
    </Searchwraper>
  )
}

export default SearchInput
