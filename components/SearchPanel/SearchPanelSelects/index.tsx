import React from "react"
import { LocationIcon, SearchPanelWraper, Select } from "./style"

const SearchPanelSelects = () => {
  return (
    <SearchPanelWraper>
      <LocationIcon />
      <Select name='' id=''>
        <option value='New york, USA'>New york, USA</option>
        <option value='Moscow, Russia'>Moscow, Russia</option>
        <option value='Kiew, Ukraina'>Kiew, Ukraina</option>
        <option value='Tashkent, Uzbekistan'>Tashkent, Uzbekistan</option>
      </Select>
    </SearchPanelWraper>
  )
}

export default SearchPanelSelects
