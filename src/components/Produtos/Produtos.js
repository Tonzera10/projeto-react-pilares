import React from "react";
import { StyleImg, StyleProdutos } from "./Styled";

export const Produto = ({
    brinquedos, 
    carrinho,
    setCarrinho,
    valorMin,
    valorMax,
    buscaNome
}) => {

    const adicionaNoCarrinho = (valor) => {
        const listaCarrinho = brinquedos.filter((item) => item === valor)
        setCarrinho([...carrinho, listaCarrinho])
    }

    return (
        <>
            {brinquedos
            .filter((brinquedo)=>{
                return brinquedo.nome.toLowerCase().includes(buscaNome.toLowerCase())
            })
            .filter((brinquedo)=>{
                return brinquedo.valor >= valorMin || valorMin === ""
            })
            .filter((brinquedo)=>{
                return brinquedo.valor <= valorMax || valorMax === ""
            })
            .sort()
            .map((brinquedo, indice) => {
                return(
                    <StyleProdutos key={indice}>
                            <StyleImg src={brinquedo.imagem}/>
                            <p>{brinquedo.nome}</p>
                            <p>Valor: R$ {brinquedo.valor},00</p>
                            <button onClick={() => adicionaNoCarrinho(brinquedo)}>Adicionar no Carrinho</button>
                    </StyleProdutos>
                )
            })}
        </>
    )

}