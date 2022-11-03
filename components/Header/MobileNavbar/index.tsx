import Link from "next/link"
import React, { FC } from "react"
import { data } from "../data"
import { MobileNavButton, MobileNavLinks, MobileNavWraper } from "./style"

const MobileNavbar: FC = () => {
  return (
    <MobileNavWraper>
      <MobileNavButton>Login</MobileNavButton>
      <MobileNavButton>Join for free</MobileNavButton>
      {data.map((el: { link: string; name: string; id: number }) => (
        <Link key={el.id} href={el.link}>
          <MobileNavLinks>{el.name}</MobileNavLinks>
        </Link>
      ))}
    </MobileNavWraper>
  )
}

export default MobileNavbar
