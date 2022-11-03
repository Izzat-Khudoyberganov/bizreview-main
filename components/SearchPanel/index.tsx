import React, { FC } from "react"
import SearchBtn from "./SearchBtn"
import SearchInput from "./SearchInput"
import SearchPanelSelect from "./SearchPanelSelects"
import { SearchPanelContent } from "./style"

const SearchPanel: FC = () => {
  return (
    <SearchPanelContent>
      <SearchInput />
      <SearchPanelSelect />
      <SearchBtn />
    </SearchPanelContent>
  )
}

export default SearchPanel
