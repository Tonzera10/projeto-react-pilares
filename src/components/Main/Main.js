import React from "react";
import {Nav} from "../Nav/Nav"
import {Section} from "../Section/Section"
import { StyleMain } from "./Styled";



export const Main = ({
    valorMin,
    setValorMin,
    valorMax,
    setValorMax,
    buscaNome,
    setBuscaNome,
    setOrdem,
    brinquedos,
    carrinho,
    setCarrinho,
    ordem,
    setQuantidade,
    quantidade,
    setItem,
    getItem,

}) => {

    

    return (
        <StyleMain>
            <Nav
            valorMin={valorMin}
            setValorMin={setValorMin}
            valorMax={valorMax}
            setValorMax={setValorMax}
            buscaNome={buscaNome}
            setBuscaNome={setBuscaNome}
            setOrdem={setOrdem}
            />
            <Section 
            brinquedos={brinquedos} 
            carrinho={carrinho}
            valorMin={valorMin}
            valorMax={valorMax}
            buscaNome={buscaNome}
            setCarrinho={setCarrinho}
            ordem={ordem}
            setQuantidade={setQuantidade}
            quantidade={quantidade}
            setItem={setItem}
            getItem={getItem}
            />
        </StyleMain>
    )
}