import React from "react";
import {Nav} from "../Nav/Nav"
import {Section} from "../Section/Section"
import {Aside} from "../Aside/Aside"
import { StyleMain } from "./Styled";
import buzz from "../assets/Buzz.jpg"
import zurg from "../assets/Zurg.jpg"
import ets from "../assets/Et.jpg"
import pistola from "../assets/pistola.png"

export const Main = () => {

    const brinquedos = [
        {
            nome: "Buzz Lightyear",
            valor: 250,
            imagem: `${buzz}`
        },
        {
            nome: "Zurg",
            valor: 235,
            imagem: `${zurg}`
        },
        {
            nome: "ETs",
            valor: 115,
            imagem: `${ets}`
        },
        {
            nome: "Space Ranger Dart Launcher",
            valor: 25,
            imagem: `${pistola}`
        },
    ]

    const adicionaNoCarrinho = () => {
        
    }

    const buscaValorMinimo = () => {
        
    }

    return (
        <StyleMain>
            <Nav/>
            <Section brinquedos={brinquedos}/>
            <Aside/>
        </StyleMain>
    )
}