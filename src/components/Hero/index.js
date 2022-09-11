import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import styled from "styled-components";

import { techs, Icons } from "./content";

import ButtonCV from "../ButtonCV";

const Hero = () => {
  return (
    <HeroBox>
      <Container>
        <WrapperHero>
          <ContentBanner>
            <span>Olá, me chamo</span>
            <h1>Jackson Bruno</h1>
            <h4>Desenvolvedor frontend</h4>
            <p>
              Sou responsável por dar vida ao seu projeto. Transformo design em
              páginas para a web com agilidade, qualidade e alta perfomance.
            </p>
            <ContentHeroActions>
              <ButtonCV />
              <ul>
                <li>
                  <LinkRoute href="#">
                    <IoLogoLinkedin />
                  </LinkRoute>
                </li>
                <li>
                  <LinkRoute href="#">
                    <IoLogoGithub />
                  </LinkRoute>
                </li>
              </ul>
            </ContentHeroActions>
            <HeroTechs>
              <ul>
                {techs.map((item, i) => {
                  const Icon = Icons[item.label];
                  return (
                    <li key={i}>
                      <CardTechs>
                        <div>
                          <Icon />
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </CardTechs>
                    </li>
                  );
                })}
              </ul>
            </HeroTechs>
          </ContentBanner>
        </WrapperHero>
      </Container>
    </HeroBox>
  );
};
const HeroBox = styled.header`
  width: 100%;
  background: var(--color-radial-a);
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperHero = styled.section`
  width: 100%;
  padding-top: 6.5rem;
  padding-bottom: var(--64px);
  display: flex;
`;
const ContentBanner = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  > span {
    font-size: var(--24px);
    text-transform: uppercase;
    font-weight: 300;
  }
  > h1 {
    font-size: var(--64px);
    font-weight: 700;
    text-transform: uppercase;
    background: var(--color-linear-a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  > h4 {
    font-size: var(--24px);
    text-transform: uppercase;
    letter-spacing: var(--8px);
    font-weight: 300;
  }
  > p {
    font-size: var(--16px);
    max-width: var(--mobile);
    margin: 0 auto;
    padding-top: var(--16px);
    line-height: var(--24px);
  }
`;
const ContentHeroActions = styled.div`
  margin: 0 auto;
  display: flex;
  padding: var(--32px) 0px;
  > ul {
    display: flex;
  }
`;
const LinkRoute = styled.button`
  color: var(--color-light-b);
  height: 50px;
  padding: 0px var(--16px);
  background: var(--color-linear-a);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  font-size: var(--18px);
  margin-left: var(--16px);
  display: flex;
  align-items: center;
`;
const HeroTechs = styled.div`
  padding-top: var(--64px);
  margin: 0 auto;
  > ul {
    width: 100%;
    display: flex;
    gap: var(--32px);
  }
`;
const CardTechs = styled.div`
  max-width: 17.5rem;
  background: var(--color-bg-b);
  border: solid 1px var(--color-main-b);
  border-radius: 10px;
  > div {
    width: 120px;
    height: 120px;
    background: var(--color-linear-a);
    border-radius: 100px;
    margin: var(--32px) auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--64px);
  }
  > h4 {
    font-size: var(--24px);
    font-weight: 500;
    padding-bottom: var(--16px);
  }
  > p {
    font-size: var(--16px);
    padding-right: var(--16px);
    padding-left: var(--16px);
    font-weight: 300;
    line-height: var(--24px);
    padding-bottom: var(--32px);
  }
`;

export default Hero;
