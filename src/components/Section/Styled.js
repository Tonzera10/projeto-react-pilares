import styled from "styled-components";

export const StyleSection = styled.div`
    display: flex;
    flex-direction: column;

`

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
`

export const Produtos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    `
export const StyleProdutos = styled.div`
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
    height: 330px;
    padding: 10px;
    background-color: white;
    &:hover{
        transform: scale(1.2);
    
    }
`
export const StyleImg = styled.img`
    width: 170px;
    height: 170px;
    display: flex;
    
`
export const StyleButton = styled.button`
    border-radius: 10px;
    &:hover{
        color: white;
        background-color: purple;
    }
`
