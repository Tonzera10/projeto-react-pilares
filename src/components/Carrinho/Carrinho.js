import React from "react";
import {
  H2,
  ImgProduto,
  ProdutoNoCarrinho,
  StyleBotao,
  StyleCarrinho,
  Vazio,
} from "./Styled";

export const Carrinho = ({
  carrinho,
  setCarrinho,
  quantidade,
  setQuantidade,
  valorTotal,
}) => {
  const removerDoCarrinho = (item) => {
    //Cópia do carrinho usando spread operator
    const copiaDoCarrinho = [...carrinho];

    //Variavel utilizando find para encontrar se existe dentro do copiaDoCarrinho um produto com quantidade menor que 2
    const verificaCopiaDoCarrinho = copiaDoCarrinho.find(
      (produto) => produto.nome === item.nome && produto.quantidade > 1
    );
    //Condição para remover o item na tela caso haja apenas um item na lista
    if (!verificaCopiaDoCarrinho) {
      const listaCarrinho = copiaDoCarrinho.filter(
        (produto) => produto !== item
      );
      setCarrinho(listaCarrinho);
      setQuantidade(quantidade - 1);
    } else {
      //
      verificaCopiaDoCarrinho.quantidade =
        verificaCopiaDoCarrinho.quantidade - 1;
      setCarrinho(copiaDoCarrinho);
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <StyleCarrinho>
      <H2>Carrinho:</H2>
      {carrinho?.length > 0 ? (
        carrinho.map((carro) => {
          //Aqui está mapeando o array de carrinho para renderizar na pagina.
          return (
            <>
              <ProdutoNoCarrinho key={carro.id}>
                <ImgProduto src={carro.imagem} alt={carro.nome} />
                <p>{carro.nome}</p>
                <p>Valor Unitário: {carro.valor},00</p>
                <StyleBotao onClick={() => removerDoCarrinho(carro)}>
                  Remover
                </StyleBotao>
                <p>{`${carro.quantidade}x`}</p>
                <p>Valor total = {carro.valor * carro.quantidade},00</p>
              </ProdutoNoCarrinho>
            </>
          );
        })
      ) : (
        <Vazio>Vazio, adicione algúm produto!</Vazio>
      )}
      <H2>Valor total da compra: R${valorTotal},00</H2>
    </StyleCarrinho>
  );
};
