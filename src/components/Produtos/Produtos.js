import React from "react";
import buzz from "../assets/Buzz.jpg"
import { StyleImg, StyleProdutos } from "./Styled";

export const Produto = () => {
    return (
        <>
            <StyleProdutos>
                    <StyleImg src={buzz}/>
                    <p>Buzz Lightyear</p>
                    <p>Valor: R$ 205,00</p>
                    <button>Adicionar no Carrinho</button>
            </StyleProdutos>
        </>
    )

}