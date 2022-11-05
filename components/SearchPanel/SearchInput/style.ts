import { Search } from "@styled-icons/bootstrap"
import styled from "styled-components"

export const Searchwraper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;

  @media (max-width: 933px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  display: block;
  height: 50px;
  outline: none;
  border: none;

  @media (max-width: 933px) {
    width: 300px;
  }
`

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 50px;

  @media (max-width: 500px) {
    display: none;
  }
`
