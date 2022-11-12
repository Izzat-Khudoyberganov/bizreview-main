import Link from "next/link";
import styled from "styled-components";

const Nav = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1150px) {
    padding: 0 15px;
  }
`;

const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 933px) {
    display: none;
  }
`;
const NavbarLink = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavbarAction = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 933px) {
    display: none;
  }
`;

const LoginBtn = styled(Link)`
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #646c7b;
  background-color: #fff;
`;

const JoinBtn = styled.button`
  padding: 8px 20px;
  background-color: aquamarine;
`;
const SignUpBtn = styled.button`
  font-weight: 500;
  background-color: #0d182e;

  & > a {
    color: #fff;
  }
`;

export {
  Nav,
  NavbarNav,
  NavbarAction,
  NavbarLink,
  LoginBtn,
  JoinBtn,
  SignUpBtn,
};
