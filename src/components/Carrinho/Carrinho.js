import React, { useEffect } from "react";
import {
  ImgProduto,
  ProdutoNoCarrinho,
  StyleBotao,
  StyleCarrinho,
} from "./Styled";

export const Carrinho = ({
  carrinho,
  setCarrinho,
  quantidade,
  setQuantidade,
}) => {
  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem("produtos"));
    if (lista.length >= 0) {
      setCarrinho(lista);
    }
  }, []);

  const removerDoCarrinho = (valor) => {
    const listaCarrinho = carrinho.filter((item) => item !== valor);
    // localStorage.removeItem("produtos", valor)
    setCarrinho(listaCarrinho);
    setQuantidade(quantidade - 1);
  };

  return (
    <StyleCarrinho>
      <h2>Carrinho:</h2>
      {carrinho.map((carro, indice) => {
        //Aqui está mapeando o array de carrinho para renderizar na pagina.
        return (
          <>
            <ProdutoNoCarrinho key={indice[0]}>
              <ImgProduto src={carro[0].imagem} />
              <p>
                {carro[0].nome} = {carro[0].valor},00
              </p>
              <StyleBotao onClick={() => removerDoCarrinho(carro[0])}>
                Remover da lista
              </StyleBotao>
              <p>{`${carro[0].quantidade}x`}</p>
              <p>valor total = {carro[0].valor},00</p>
            </ProdutoNoCarrinho>
          </>
        );
      })}
    </StyleCarrinho>
  );
};
