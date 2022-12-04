import React from "react";
import { StyleAside } from "./Styled";

export const Aside = ({ carrinho, setCarrinho }) => {

    const removerDoCarrinho = (valor) => {
        const listaCarrinho = carrinho.filter((item) => item !== valor)
        setCarrinho(listaCarrinho)
    }
    
  return (
    <StyleAside>
      <h2>Carrinho:</h2>
      {carrinho.map((carro, indice) => {
        return (
          <div key={indice}>
            <p>
              {carro[0].quantidade}x {carro[0].nome} = {carro[0].valor}
            </p>
            <button onClick={() => removerDoCarrinho(carro)}>Remover da lista</button>

            <p>valor total = {carro[0].valor}</p>
          </div>
        );
      })}
    </StyleAside>
  );
};
