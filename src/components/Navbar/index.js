import React from "react";
import styled from "styled-components";
import { ReactComponent as Brand } from "../../images/brand.svg";
import { ReactComponent as Brand2 } from "../../images/brand-2.svg";
import { IoFlashSharp, IoCloseCircleOutline } from "react-icons/io5";

import ButtonCV from "../ButtonCV";

import { menu } from "./content";

const Navbar = ({ toggleTheme }) => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile);
    console.log(menuMobile);
  };
  return (
    <>
      <BoxMobile isMobile={menuMobile}>
        <header>
          <button onClick={handleMenuMobile}>
            Fechar <IoCloseCircleOutline />
          </button>
        </header>
        <main>
          <ul>
            {menu.map((item, i) => (
              <li key={i}>
                <LinkListMobile onClick={handleMenuMobile} href={item.link}>
                  {item.text}
                </LinkListMobile>
              </li>
            ))}
          </ul>
        </main>
        <footer></footer>
      </BoxMobile>
      <NavbarBox>
        <Container>
          <WrapperNavbar>
            {menuMobile ? (
              <a href="#">
                <Brand />
              </a>
            ) : (
              <a href="#">
                <Brand2 />
              </a>
            )}

            <NavigationBox>
              <Menu>
                {menu.map((item, i) => (
                  <li key={i}>
                    <LinkList href={item.link}>{item.text}</LinkList>
                  </li>
                ))}
              </Menu>
              <MenuMobile onClick={handleMenuMobile}>
                <div></div>
                <div></div>
                <div></div>
              </MenuMobile>
              <BtnQuery>
                <ButtonCV />
              </BtnQuery>
              <DarkMode onClick={toggleTheme}>
                <IoFlashSharp />
              </DarkMode>
            </NavigationBox>
          </WrapperNavbar>
        </Container>
      </NavbarBox>
    </>
  );
};

const NavbarBox = styled.nav`
  width: 100%;
  padding: var(--16px);
`;
const BoxMobile = styled.div`
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: var(--bg);
  z-index: 1000;
  transition: 0.2s;
  > header {
    width: 100%;
    padding: var(--32px);
    display: flex;
    justify-content: end;
    > button {
      border: none;
      font-size: var(--18px);
      text-transform: uppercase;
      color: var(--color);
      background: var(--color-linear-a);
      height: 50px;
      border-radius: 5px;
      padding: 0px var(--32px);
      display: flex;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      svg {
        margin-left: var(--8px);
        width: 25px;
        height: 25px;
        fill: var(--color);
      }
    }
  }
  > main {
    flex: 1;
    > ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li {
        margin: var(--16px) var(--32px);
      }
    }
  }
`;
const LinkListMobile = styled.a`
  font-size: var(--32px);
  transition: 0.2s;
  color: var(--color);
  text-transform: uppercase;
  font-weight: 500;
  :hover {
    color: var(--color-main-c);
  }
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavigationBox = styled.div`
  width: auto;
  display: flex;
  align-items: center;
`;
const MenuMobile = styled.div`
  cursor: pointer;
  width: 50px;
  height: 45px;
  border-radius: 5px;
  overflow: hidden;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  transition: 0.2s;
  @media (max-width: 40rem) {
    display: flex;
  }
  > div {
    width: 100%;
    height: 5px;
    background: var(--color-linear-a);
  }
`;
const Menu = styled.ul`
  display: flex;
  @media (max-width: 40rem) {
    display: none;
  }
`;
const BtnQuery = styled.div`
  @media (max-width: 40rem) {
    display: none;
  }
`;
const LinkList = styled.a`
  color: var(--color);
  padding-right: var(--32px);
  text-transform: uppercase;
  transition: 0.2s;
  :hover {
    color: var(--color-main-b);
  }
`;

const DarkMode = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px var(--16px);
  background: var(--color-linear-a);
  color: var(--light);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  margin-left: var(--32px);
  font-size: var(--18px);
`;

export default Navbar;
