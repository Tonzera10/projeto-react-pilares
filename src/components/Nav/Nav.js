import React from "react";
import { StyleInput, StyleNav, StyleSelect } from "./Styled";

export const Nav = ({
  valorMin,
  setValorMin,
  valorMax,
  setValorMax,
  buscaNome,
  setBuscaNome,
  setOrdem,
}) => {
  return (
    <StyleNav>
      <p>Filtros</p>
      <label>
        <p>Ordenação: </p>
        <StyleSelect onChange={(e) => setOrdem(e.target.value)}>
          <option value="">Escolha a Ordem</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </StyleSelect>
      </label>
      <label>
        <p>Valor mínimo:</p>
        <StyleInput
          type={"number"}
          onChange={(e) => setValorMin(e.target.value)}
          value={valorMin}
        />
      </label>
      <label>
        <p>Valor máximo:</p>
        <StyleInput
          type={"number"}
          onChange={(e) => setValorMax(e.target.value)}
          value={valorMax}
        />
      </label>
      <label>
        <p>Busca por nome:</p>
        <StyleInput
          onChange={(e) => setBuscaNome(e.target.value)}
          value={buscaNome}
        />
      </label>
    </StyleNav>
  );
};
