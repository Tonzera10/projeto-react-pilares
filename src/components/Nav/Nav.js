import React from "react"
import { StyleNav } from "./Styled"

export const Nav = () => {

    

    return (
        <StyleNav>
            <p>Filtros</p>
            <label>
                Valor mínimo:
                <br/>
                <input type={"number"} ></input>
            </label>
            <label>
                Valor máximo:
                <br/>
                <input type={"number"} ></input>
            </label>
            <label>
                Busca por nome:
                <br/>
                <input ></input>
            </label>
        </StyleNav>

    )
}