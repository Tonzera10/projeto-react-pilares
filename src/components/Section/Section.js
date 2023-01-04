import React, { useEffect } from "react";
import {
  Produtos,
  StyleButton,
  StyleImg,
  StyleProdutos,
  StyleSection,
} from "./Styled";

export const Section = ({
  brinquedos,
  setCarrinho,
  carrinho,
  valorMin,
  valorMax,
  buscaNome,
  ordem,
  setQuantidade,
  quantidade,
}) => {
  useEffect(() => {
    if (carrinho.length > 0) {
      const tarefasEmString = JSON.stringify(carrinho);
      localStorage.setItem("produtos", tarefasEmString);
    }
  }, [carrinho]);

  const adicionaNoCarrinho = (obj, id) => {
    const listaCarrinho = brinquedos.filter((item) => item === obj);
    setCarrinho([...carrinho, listaCarrinho]);
    setQuantidade(quantidade + 1);
    // const copiaCarrinho = [...carrinho];

    // const item = copiaCarrinho.find((produto) => produto.id === obj.id);

    // if (!item) {
    //   copiaCarrinho.push(listaCarrinho);
    // } else {
    //   item.quantidade = item.quantidade + 1;
    // }
    // setCarrinho(...carrinho, copiaCarrinho);
  };

  return (
    <StyleSection>
      <Produtos>
        {brinquedos
          .filter((brinquedo) => {
            return brinquedo.nome
              .toLowerCase()
              .includes(buscaNome.toLowerCase());
          })
          .filter((brinquedo) => {
            return brinquedo.valor >= valorMin || valorMin === "";
          })
          .filter((brinquedo) => {
            return brinquedo.valor <= valorMax || valorMax === "";
          })
          .sort((a, b) => {
            if (ordem.toLowerCase() === "crescente") {
              if (a.valor < b.valor) {
                return -1;
              } else {
                return true;
              }
            }

            if (ordem.toLowerCase() === "decrescente") {
              if (a.valor > b.valor) {
                return -1;
              } else {
                return true;
              }
            }
          })
          .map((brinquedo, indice) => {
            return (
              <StyleProdutos key={indice}>
                <StyleImg src={brinquedo.imagem} />
                <p>{brinquedo.nome}</p>
                <p>Valor: R$ {brinquedo.valor},00</p>
                <StyleButton onClick={() => adicionaNoCarrinho(brinquedo)}>
                  Adicionar no carrinho
                </StyleButton>
              </StyleProdutos>
            );
          })}
      </Produtos>
    </StyleSection>
  );
};
