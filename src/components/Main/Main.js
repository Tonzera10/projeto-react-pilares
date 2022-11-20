import React from "react";
import {Nav} from "../Nav/Nav"
import {Section} from "../Section/Section"
import {Aside} from "../Aside/Aside"
import { StyleMain } from "./Styled";

export const Main = () => {
    return (
        <StyleMain>
            <Nav/>
            <Section/>
            <Aside/>
        </StyleMain>
    )
}