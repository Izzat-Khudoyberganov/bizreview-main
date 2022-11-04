import { Location } from "@styled-icons/evil"
import styled from "styled-components"

export const SearchPanelWraper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;

  @media (max-width: 933px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Select = styled.select`
  width: 200px;
  border: none;
  background-color: #fff;

  &:select:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`

export const LocationIcon = styled(Location)`
  width: 30px;
  height: 40px;
`
