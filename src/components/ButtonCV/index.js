import React from "react";
import styled from "styled-components";
import { btncv } from "./content";

const index = () => {
  return (
    <>
      {btncv.map((item, i) => (
        <ButtonCV href={item.link} key={i} target="_blanck">
          {item.text}
        </ButtonCV>
      ))}
    </>
  );
};

const ButtonCV = styled.a`
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
  display: flex;
  align-items: center;
`;

export default index;
