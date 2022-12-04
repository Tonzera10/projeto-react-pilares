import React from "react";
import { Produtos, SectionHeader, StyleSection } from "./Styled";
import { Produto } from "../Produtos/Produtos";


export const Section = ({
    brinquedos, 
    setCarrinho, 
    carrinho, 
    valorMin, 
    valorMax,
    buscaNome
}) => {



    return (
        <StyleSection>
            <SectionHeader>
                <p>Quantidade de produtos:</p>
                <label>
                    Ordenação:
                    <select>
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </label>
            </SectionHeader>
            <Produtos>
                <Produto 
                brinquedos={brinquedos} 
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                valorMin={valorMin}
                valorMax={valorMax}
                buscaNome={buscaNome}
                />
            </Produtos>
        </StyleSection>
    )
}