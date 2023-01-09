import styled from "styled-components";

export const StyleCarrinho = styled.div`
    height: auto;
    width: auto;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

`

export const ProdutoNoCarrinho = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
`

export const ImgProduto = styled.img`
    width: 80px;
    height: 80px;
    
`
export const StyleBotao = styled.button`
    height: 30px;
    &:hover{
        color: white;
        background-color: purple;
    }
    border-radius: 10px;
`
export const Vazio = styled.h1`
    text-align: center;
`