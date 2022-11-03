import { ReactNode } from "react"
import styled from "styled-components"

const Main = styled.div`
  width: 100%;
`

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  )
}
