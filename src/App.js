import {GlobalStyle} from "./GlobalStyle";
import {Header} from "./components/Header/Header"
import {Main} from "./components/Main/Main"
import {Footer} from "./components/Footer/Footer"
import { useState } from "react";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { useEffect } from "react";


function App() {

    const [tela, setTela] = useState(1);
    const [valorMin, setValorMin] = useState("")
    const [valorMax, setValorMax] = useState("")
    const [buscaNome, setBuscaNome] = useState("")
    const [ordem, setOrdem] = useState("")
    const [carrinho, setCarrinho] = useState([])
    const [quantidade, setQuantidade] = useState(0)


    const setItem = () => { // Função criada para setar os itens, do estado carrinho, no local storage

        const produtosEmString = JSON.stringify(carrinho);
        localStorage.setItem("produtos", produtosEmString);
      
    }
    const getItem = () => { //função criada para pegar os itens que estão no local storage
        const lista = JSON.parse(localStorage.getItem("produtos"));
        if(lista.length > 0){ // condição para pegar apenas se houver itens no local storage
            return setCarrinho(lista);
        } 
    }
    useEffect(() => {// chamada da função de pegar itens usando useEffect para não entrar em loop
        getItem()
    }, []);

    useEffect(() => { //chamada da função de setar itens usando useEffect para não entrar em loop e usando a condição de quando mudar o estado carrinho
        setItem()
    }, [carrinho])
    

  return (
    <div >
      <GlobalStyle/>
      <Header 
      setTela={setTela} 
      tela={tela}
      quantidade={quantidade}
      />
      {tela === 1 ? 
      <Main
      valorMin={valorMin}
      setValorMin={setValorMin}
      valorMax={valorMax}
      setValorMax={setValorMax}
      buscaNome={buscaNome}
      setBuscaNome={setBuscaNome}
      setOrdem={setOrdem} 
      carrinho={carrinho}
      setCarrinho={setCarrinho}
      ordem={ordem}
      setQuantidade={setQuantidade}
      quantidade={quantidade}
      getItem={getItem}
      setItem={setItem}
      /> 
      : 
      <Carrinho 
      quantidade={quantidade}
      carrinho={carrinho}
      setCarrinho={setCarrinho}
      setQuantidade={setQuantidade}
      getItem={getItem}
      setItem={setItem}
      />} 
      <Footer/>
    </div>
  );
}

export default App;
