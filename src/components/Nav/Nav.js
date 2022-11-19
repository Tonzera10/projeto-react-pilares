import React from "react"

export const Nav = () => {
    return (
        <>
            <p>Filtros</p>
            <label>
                Valor mínimo:
                <input type={"text"} ></input>
            </label>
            <label>
                Valor máximo:
                <input type={"text"} ></input>
            </label>
            <label>
                Busca por nome:
                <input type={"text"} value={"Produto"}></input>
            </label>
        </>

    )
}