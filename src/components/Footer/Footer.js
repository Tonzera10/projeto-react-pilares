import React from "react";
import { StyleFooter } from "./Styled";

export const Footer = () => {
  return (
    <StyleFooter>
      <p>Criado por: Everton Mello</p>
      <p>
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/ton-mello/"
          target="_blank"
        >
          Everton Mello
        </a>
      </p>
      <p>
        GitHub:
        <a href="https://github.com/Tonzera10" target="_blank">
          Everton Mello
        </a>
      </p>
    </StyleFooter>
  );
};
