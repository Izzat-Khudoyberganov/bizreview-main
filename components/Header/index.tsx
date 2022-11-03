import { FC } from "react"
import { data } from "./data"
import Image from "next/image"
import img from "../../img/logo.png"
import { NavbarLinks } from "../NavbarLinks"
import { ButtonPrimary, ButtonSecondary } from "../Button"
import { Nav, NavbarNav, NavbarAction } from "./style"
import Link from "next/link"
import { useRouter } from "next/router"
import { en, ru } from "../../utils/translations"

type Props = {
  title?: string
}

export const Header: FC<Props> = ({ title }) => {
  let router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : ru

  const handleLanguageToggle = () => {
    switch (locale) {
      case "en":
        router.push("/", "/", { locale: "ru" })
        break
      case "ru":
        router.push("/", "/", { locale: "en" })
        break
    }
  }
  return (
    <Nav>
      <NavbarNav>
        {data.map((el: { link: string; name: string; id: number }) => (
          <NavbarLinks key={el.id} text={el.name} link={el.link} />
        ))}
      </NavbarNav>
      <Link href='/'>
        <Image src={img} width={200} height={70} alt='img' />
      </Link>
      <NavbarAction>
        <ButtonPrimary>{t.login}</ButtonPrimary>
        <ButtonSecondary>{t.buttonSecondary}</ButtonSecondary>
      </NavbarAction>
      <button type='button' onClick={handleLanguageToggle}>
        {locale === "en" ? "ru" : "en"}
      </button>
    </Nav>
  )
}
