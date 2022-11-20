import React from "react";
import { Produtos, SectionHeader, StyleSection } from "./Styled";
import { Produto } from "../Produtos/Produtos";

export const Section = () => {
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
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>

            </Produtos>
        </StyleSection>
    )
}