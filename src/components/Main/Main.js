import React, { useState } from "react";
import {Nav} from "../Nav/Nav"
import {Section} from "../Section/Section"
import {Aside} from "../Aside/Aside"
import { StyleMain } from "./Styled";
import buzz from "../assets/Buzz.jpg"
import zurg from "../assets/Zurg.jpg"
import ets from "../assets/Et.jpg"
import pistola from "../assets/pistola.png"

export const Main = () => {

    const [valorMin, setValorMin] = useState("")
    const [valorMax, setValorMax] = useState("")
    const [buscaNome, setBuscaNome] = useState("")
    const [carrinho, setCarrinho] = useState([])
    const [brinquedos, setBrinquedos] = useState([
        {
            nome: "Buzz Lightyear",
            valor: 250,
            imagem: `${buzz}`,
            quantidade: 1,
            id: 1
        },
        {
            nome: "Zurg",
            valor: 235,
            imagem: `${zurg}`,
            quantidade: 1,
            id: 2
        },
        {
            nome: "ETs",
            valor: 115,
            imagem: `${ets}`,
            quantidade: 1,
            id: 3
        },
        {
            nome: "Space Ranger Dart Launcher",
            valor: 25,
            imagem: `${pistola}`,
            quantidade: 1,
            id: 4
        },
    ])

    return (
        <StyleMain>
            <Nav
            valorMin={valorMin}
            setValorMin={setValorMin}
            valorMax={valorMax}
            setValorMax={setValorMax}
            buscaNome={buscaNome}
            setBuscaNome={setBuscaNome}
            />
            <Section 
            brinquedos={brinquedos} 
            carrinho={carrinho}
            valorMin={valorMin}
            valorMax={valorMax}
            buscaNome={buscaNome}
            setCarrinho={setCarrinho}
            />
            <Aside 
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            />
        </StyleMain>
    )
}