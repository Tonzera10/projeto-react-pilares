import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { useEffect } from "react";

function App() {
  const [tela, setTela] = useState(1);
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [buscaNome, setBuscaNome] = useState("");
  const [ordem, setOrdem] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const somaValorTotal = (array) => {
    // função criada para somar o valor total dos produtos dentro do carrinho
    array?.length > 0 // ternário para verificar se tem algum item no carrinho
      ? setValorTotal(
          array.reduce(// Se tiver ele faz o reduce q é um metodo do JS para somar valores escolhidos de um array
            (carro, item) => Number(carro + item.valor * item.quantidade),
            []
          )
        ) 
      : setValorTotal(0); // Se não tiver o valor sera igual a zero
  };
  
  const quantidadeItens = (array) => {
    // função criada para saber quantidade de itens dentro do carrinho
    array?.length > 0 // ternário para verificar se tem algum item no carrinho
      ? setQuantidade(
          array.reduce( // Se tiver ele faz o reduce q é um metodo do JS para somar valores escolhidos de um array
            (carro, item) => Number(carro + item.quantidade),
            []
          )
        )
      : setQuantidade(0); // Se não tiver, o valor sera igual a zero
  };

  const setItem = () => {
    // Função criada para setar os itens, do estado carrinho, no local storage

    const produtosEmString = JSON.stringify(carrinho);
    localStorage.setItem("produtos", produtosEmString);
  };
  const getItem = () => {
    //função criada para pegar os itens que estão no local storage
    const lista = JSON.parse(localStorage.getItem("produtos"));
    if (lista?.length > 0) {
      // condição para pegar apenas se houver itens no local storage
      return setCarrinho(lista);
    }
  };
  
  useEffect(() => {
    // chamada da função de pegar itens usando useEffect para não entrar em loop
    getItem();
  }, []);
  
  useEffect(() => {
    //chamada da função de setar itens usando useEffect para não entrar em loop e usando a condição de quando mudar o estado carrinho
    setItem();
    somaValorTotal(carrinho);
    quantidadeItens(carrinho);
  }, [carrinho]);
  
  return (
    <div>
      <GlobalStyle />
      <Header setTela={setTela} tela={tela} quantidade={quantidade} />
      {tela === 1 ? (
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
        />
      ) : (
        <Carrinho
          quantidade={quantidade}
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          setQuantidade={setQuantidade}
          valorTotal={valorTotal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
