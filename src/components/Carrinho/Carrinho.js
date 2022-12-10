import React from "react";
import { StyleCarrinho } from "./Styled";

export const Carrinho = ({ carrinho, setCarrinho,}) => {

    const removerDoCarrinho = (valor) => {
        const listaCarrinho = carrinho.filter((item) => item !== valor)
        setCarrinho(listaCarrinho)
    }
    
  return (
    <StyleCarrinho>
      <h2>Carrinho:</h2>
      {carrinho.map((carro, indice) => {
        return (
          <div key={indice}>
            <p>
              {carro.quantidade}x {carro.nome} = {carro.valor}
            </p>
            <button onClick={() => removerDoCarrinho(carro)}>Remover da lista</button>

            <p>valor total = {carro.valor}</p>
          </div>
        );
      })}
    </StyleCarrinho>
  );
};
