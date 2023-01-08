import React, { useEffect } from "react";
import {
  Produtos,
  StyleButton,
  StyleImg,
  StyleProdutos,
  StyleSection,
} from "./Styled";
import { brinquedos } from "../../data";

export const Section = ({
  // brinquedos,
  setCarrinho,
  carrinho,
  valorMin,
  valorMax,
  buscaNome,
  ordem,
  setQuantidade,
  quantidade,
  getItem,
  setItem
}) => {

  const adicionaNoCarrinho = (item) => {
    //Cópia do carrinho usando spread operator
    const copiaDoCarrinho = [...carrinho];

    //Variavel utilizando find para encontrar se existe dentro do carrinho um produto com o mesmo nome "O nome é a propriedade do objeto, mas podemos usar outras, como por exemplo ID"
    const verificaCopiaDoCarrinho = copiaDoCarrinho.find(
      (produto) => produto.nome === item.nome
    );

    //Condição para criar o item no carrinho caso a váriavel acima não encontre "e retorne False"
    if (!verificaCopiaDoCarrinho) {
      copiaDoCarrinho.push({
        nome: item.nome,
        valor: item.valor,
        imagem: item.imagem,
        quantidade: item.quantidade,
        id: item.id,
      });
      setCarrinho(copiaDoCarrinho);
      setQuantidade(quantidade + 1)
    }

   // Condição para alterar apenas a quantidade do objeto quando a Váriavel encontrar o objeto no carrinho.
    else {
      verificaCopiaDoCarrinho.quantidade = verificaCopiaDoCarrinho.quantidade + 1;
      setCarrinho(copiaDoCarrinho);
      setQuantidade(quantidade + 1)
      
    }
    console.log(carrinho);
  };

  return (
    <StyleSection>
      <Produtos>
        {brinquedos
          .filter((brinquedo) => { //Filtro para aparecer somente os itens com o nome digitado no input de buscar por nome
            return brinquedo.nome
              .toLowerCase()
              .includes(buscaNome.toLowerCase());
          })
          .filter((brinquedo) => { //Filtro para aparecer somente os itens  com o valor minimo digitado no input de valor mínimo
            return brinquedo.valor >= valorMin || valorMin === "";
          })
          .filter((brinquedo) => { //Filtro para aparecer somente os itens  com o valor máximo digitado no input de valor máximo
            return brinquedo.valor <= valorMax || valorMax === "";
          })
          .sort((a, b) => { //Filtro para ordenar os intens em valor crescente ou decrescente
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
          .map((brinquedo, indice) => { //faz o mapeamento do array brinquedos para renderizar os itens  na tela
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
