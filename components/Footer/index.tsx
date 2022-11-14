import React, { FC } from "react"
import Image from "next/image"
import logo from "../../img/logo.png"
import Container from "../../Layout/Container"
import { ButtonSecondary } from "../Button"
import {
  ColumnTitle,
  FooterColumns,
  FooterLink,
  FooterRows,
  FooterWraper,
  Info,
} from "./style"
import { Company, GetListed, Useful } from "./data"
import MobileFooter from "./MobileFooter"

export const Footer: FC = () => {
  return (
    <FooterWraper>
      <Container>
        <FooterRows>
          <FooterColumns>
            <Image src={logo} width={180} height={70} alt='img' />
            <Info>Bizreviews has acollection of latest 25, 000+ business</Info>
            <ButtonSecondary>Join For Free</ButtonSecondary>
          </FooterColumns>
          <FooterColumns>
            <ColumnTitle>Company</ColumnTitle>
            {Company.map((el: { link: string; title: string }) => (
              <FooterLink href={el.link} key={el.title}>
                {el.title}
              </FooterLink>
            ))}
          </FooterColumns>
          <FooterColumns>
            <ColumnTitle>Get Listed</ColumnTitle>
            {GetListed.map((el: { link: string; title: string }) => (
              <FooterLink href={el.link} key={el.title}>
                {el.title}
              </FooterLink>
            ))}
          </FooterColumns>
          <FooterColumns>
            <ColumnTitle>Useful</ColumnTitle>
            {Useful.map((el: { link: string; title: string }) => (
              <FooterLink key={el.title} href={el.link}>
                {el.title}
              </FooterLink>
            ))}
          </FooterColumns>
        </FooterRows>
        <MobileFooter/>
      </Container>
    </FooterWraper>
  )
}
