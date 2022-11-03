import { Location } from "@styled-icons/evil"
import styled from "styled-components"

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
