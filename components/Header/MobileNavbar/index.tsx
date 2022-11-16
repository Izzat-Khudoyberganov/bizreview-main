import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "../data";
import { en, ru } from "../../../utils/translations";
import {
  LoginIcon,
  MobileNavButton,
  MobileNavLinks,
  MobileNavWraper,
  NavbarLinkIcons,
  UserIcon,
} from "./style";

export const MobileNavbar: FC = () => {
  let router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ru;

  return (
    <MobileNavWraper>
      <MobileNavButton>
        <LoginIcon />
        <Link href="/login">
          <a>Login</a>
        </Link>
      </MobileNavButton>
      <MobileNavButton>
        <UserIcon />
        <Link href="/signup">
          <a>Join for free</a>
        </Link>
      </MobileNavButton>
      {data.map(
        (el: { link: string; name: string; id: number; icon: any }, i) => (
          <MobileNavButton key={el.id}>
            <NavbarLinkIcons>{<el.icon />}</NavbarLinkIcons>
            <Link href={el.link}>
              <MobileNavLinks>{el.name}</MobileNavLinks>
            </Link>
          </MobileNavButton>
        )
      )}
    </MobileNavWraper>
  );
};
