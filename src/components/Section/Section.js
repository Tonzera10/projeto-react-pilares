import React from "react";
import { Produtos, SectionHeader, StyleSection } from "./Styled";
import { Produto } from "../Produtos/Produtos";


export const Section = ({brinquedos}) => {
    return (
        <StyleSection>
            <SectionHeader>
                <p>Quantidade de produtos:</p>
                <label>
                    Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </label>
            </SectionHeader>
            <Produtos>
                <Produto brinquedos={brinquedos[0]}/>
                <Produto brinquedos={brinquedos[1]}/>
                <Produto brinquedos={brinquedos[2]}/>
                <Produto brinquedos={brinquedos[3]}/>

            </Produtos>
        </StyleSection>
    )
}