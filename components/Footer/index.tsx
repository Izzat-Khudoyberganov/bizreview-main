import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../img/logo.png";
import Container from "../../Layout/Container";
import {MobileFooter} from "./MobileFooter";
import { ButtonSecondary } from "../Button";
import { Company, GetListed, Useful } from "./data";
import {
  ColumnTitle,
  FooterColumns,
  FooterLink,
  FooterRows,
  FooterWraper,
  Info,
} from "./style";

export const Footer: FC = () => {
  return (
    <FooterWraper>
      <Container>
        <FooterRows>
          <FooterColumns>
            <Image src={logo} width={180} height={70} alt="img" />
            <Info>Bizreviews has acollection of latest 25, 000+ business</Info>
            <ButtonSecondary>Join For Free</ButtonSecondary>
          </FooterColumns>
          <FooterColumns>
            <ColumnTitle>Company</ColumnTitle>
            {Company.map((el: { link: string; title: string }) => (
              <Link href={el.link} key={el.title}>
                <FooterLink> {el.title}</FooterLink>
              </Link>
            ))}
          </FooterColumns>
          <FooterColumns>
            <ColumnTitle>Get Listed</ColumnTitle>
            {GetListed.map((el: { link: string; title: string }) => (
              <Link href={el.link} key={el.title}>
                <FooterLink> {el.title}</FooterLink>
              </Link>
            ))}
          </FooterColumns>
          <FooterColumns>
            <ColumnTitle>Useful</ColumnTitle>
            {Useful.map((el: { link: string; title: string }) => (
              <Link key={el.title} href={el.link}>
                <FooterLink>{el.title}</FooterLink>
              </Link>
            ))}
          </FooterColumns>
        </FooterRows>
        <MobileFooter />
      </Container>
    </FooterWraper>
  );
};
