import Link from "next/link"
import { LinkValues } from "./types"

export const NavbarLinks = ({ text, link }: LinkValues) => {
  return (
    <li>
      <Link href={link}>{text}</Link>
    </li>
  )
}
