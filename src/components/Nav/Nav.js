import React from "react";
import { StyleNav } from "./Styled";

export const Nav = ({
  valorMin,
  setValorMin,
  valorMax,
  setValorMax,
  buscaNome,
  setBuscaNome,
  setOrdem
}) => {
  const buscaValorMin = (e) => {
    setValorMin(e.target.value);
  };

  const buscaValorMax = (e) => {
    setValorMax(e.target.value);
  };

  const buscaPorNome = (e) => {
    setBuscaNome(e.target.value);
  };

  const ordenar = (e) => {
    setOrdem(e.target.value)
}

  return (
    <StyleNav>
      <p>Filtros</p>
      <label>
        Ordenação:
        <select onChange={ordenar}>
          <option value="">Escolha a Ordem</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </select>
      </label>
      <label>
        Valor mínimo:
        <br />
        <input type={"number"} onChange={buscaValorMin} value={valorMin} />
      </label>
      <label>
        Valor máximo:
        <br />
        <input type={"number"} onChange={buscaValorMax} value={valorMax} />
      </label>
      <label>
        Busca por nome:
        <br />
        <input onChange={buscaPorNome} value={buscaNome} />
      </label>
    </StyleNav>
  );
};
