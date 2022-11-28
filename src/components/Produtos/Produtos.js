import React from "react";
import { StyleImg, StyleProdutos } from "./Styled";

export const Produto = ({brinquedos}) => {




    return (
        <>
            <StyleProdutos>
                    <StyleImg src={brinquedos.imagem}/>
                    <p>{brinquedos.nome}</p>
                    <p>Valor: R$ {brinquedos.valor},00</p>
                    <button>Adicionar no Carrinho</button>
            </StyleProdutos>
        </>
    )

}