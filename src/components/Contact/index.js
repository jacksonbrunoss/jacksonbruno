import React from "react";
import styled from "styled-components";

import TitleSection from "../TitleSection";
import Cv from "../ButtonCV";

import { contatos, Icons } from "./content";

const Contact = () => {
  return (
    <ContactBox id="contatos">
      <Container>
        <WrapperContact>
          <TitleSection text="Contatos" />
          <ContentContact>
            <h4>Pronto para começarmos um projeto juntos?</h4>
            <p>
              Estou pronto para começar. A entrega da programação será fiel ao
              layout proposto pelo designer, com respeito aos prazos e às suas
              necessidades.
            </p>
            <ContentContactAction>
              <a href="#">
                <button>oi.jbss@gmail.com</button>
              </a>
              <Cv />
            </ContentContactAction>
            <ContactIcons>
              <ul>
                {contatos.map((item, i) => {
                  const Icon = Icons[item.label];
                  return (
                    <li key={i}>
                      <a href={item.link} target="_blanck">
                        <button>
                          <Icon />
                        </button>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </ContactIcons>
          </ContentContact>
        </WrapperContact>
      </Container>
    </ContactBox>
  );
};
const ContactBox = styled.section`
  width: 100%;
  background: var(--color-linear-b);
`;
const Container = styled.div`
  max-width: var(--desktop);
  margin: 0 auto;
`;
const WrapperContact = styled.section`
  width: 100%;
  padding: var(--64px) 0px;
`;
const ContentContact = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  > h4 {
    font-size: var(--24px);
    background: var(--color-linear-a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  > p {
    font-size: var(--18px);
    max-width: 780px;
    line-height: var(--24px);
    margin: 0 auto;
    padding-top: var(--24px);
    padding-bottom: var(--32px);
  }
`;
const ContentContactAction = styled.div`
  width: 100%;
  > a {
    button {
      background: var(--color-linear-a);
      color: var(--color-light-b);
      border-radius: 5px;
      cursor: pointer;
      height: 50px;
      padding: 0px var(--32px);
      transition: 0.2s;
      text-transform: uppercase;
      font-weight: bold;
      border: none;
      margin-right: var(--24px);
    }
  }
`;
const ContactIcons = styled.div`
  width: 100%;
  padding-top: var(--32px);
  > ul {
    display: flex;
    justify-content: center;
    gap: var(--24px);
    > li {
      > a {
        > button {
          display: flex;
          align-items: center;
          min-height: 50px;
          padding: 0px var(--16px);
          font-size: var(--24px);
          background: var(--color-linear-a);
          color: var(--color-light-b);
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;
export default Contact;
