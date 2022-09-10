import React from "react";
import styled from "styled-components";
import { ReactComponent as Brand } from "../../images/brand.svg";
import { IoFlashSharp } from "react-icons/io5";

import { menu, btncv } from "./content";

const Navbar = () => {
  return (
    <NavBar>
      <Container>
        <Wrapper>
          <a href="#">
            <Brand />
          </a>
          <NavigationBox>
            <Menu>
              {menu.map((item) => (
                <li>
                  <LinkList href={item.link}>{item.text}</LinkList>
                </li>
              ))}
            </Menu>
            {btncv.map((item) => (
              <ButtonCV>{item.text}</ButtonCV>
            ))}
            <DarkMode>
              <IoFlashSharp />
            </DarkMode>
          </NavigationBox>
        </Wrapper>
      </Container>
    </NavBar>
  );
};

const NavBar = styled.nav`
  width: 100%;
  padding: var(--16px);
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const Wrapper = styled.div`
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
const Menu = styled.ul`
  display: flex;
`;
const LinkList = styled.a`
  color: var(--color-light-b);
  padding-right: var(--32px);
  text-transform: uppercase;
  transition: 0.2s;
  :hover {
    color: var(--color-main-b);
  }
`;
const ButtonCV = styled.button`
  background: var(--color-linear-a);
  color: var(--color-light-b);
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  padding: 0px var(--32px);
  transition: 0.2s;
  text-transform: uppercase;
  font-weight: 900;
  border: none;
`;

const DarkMode = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px var(--16px);
  background: var(--color-linear-a);
  color: var(--color-light-b);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  margin-left: var(--32px);
  font-size: var(--18px);
`;

export default Navbar;
