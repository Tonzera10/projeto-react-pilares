import React from "react";
import { Produtos, StyleButton, StyleImg, StyleProdutos, StyleSection } from "./Styled";


export const Section = ({
  brinquedos,
  setCarrinho,
  carrinho,
  valorMin,
  valorMax,
  buscaNome,
  ordem,
}) => {

    const adicionaNoCarrinho = (valor) => {
        const listaCarrinho = brinquedos.filter((item) => item === valor);
        setCarrinho(...carrinho, listaCarrinho);
    }
    console.log(carrinho)
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
            if(ordem.toLowerCase() === "crescente") {
                if(a.valor < b.valor) {
                  return  -1;
                } else {
                  return true
                }
              };
  
              if(ordem.toLowerCase() === "decrescente"){
                if(a.valor > b.valor) {
                  return  -1;
                } else {
                  return true
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
