import React from "react";
import { BotaoCarrinho, ImgCarrinho, QntProdutos, StyleHeader, Titulo } from "./Styled";
import carrinho from"../../assets/carrinho.png"

export const Header = ({setTela, tela}) => {

    const mudarTela = () => {
        if(tela === 1){
            setTela(2)
        } else {
            setTela(1)
        }
      }

    return (
        <StyleHeader>
            <Titulo>Ao Infinito e Além Store</Titulo>
            <BotaoCarrinho onClick={mudarTela}><ImgCarrinho src={carrinho}/><QntProdutos>2</QntProdutos></BotaoCarrinho>
            
        </StyleHeader>
    )
}