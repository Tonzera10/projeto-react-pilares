import {GlobalStyle} from "./GlobalStyle";
import {Header} from "./components/Header/Header"
import {Main} from "./components/Main/Main"
import {Footer} from "./components/Footer/Footer"
import { useState } from "react";
import { Carrinho } from "./components/Carrinho/Carrinho";
import buzz from "./assets/Buzz/Buzz.jpg"
import zurg from "./assets/Zurg/Zurg.jpg"
import ets from "./assets/Ets/Et.jpg"
import buzzFilme from "./assets/BuzzFilme/BuzzFilme.jpg"
import lego from "./assets/Lego/LegoBuzz.jpg"
import nave from "./assets/Nave/Nave.jpg"
import zurgFilme from "./assets/ZurgFilme/ZurgFilme.jpg"


function App() {

    const [tela, setTela] = useState(1);
    const [valorMin, setValorMin] = useState("")
    const [valorMax, setValorMax] = useState("")
    const [buscaNome, setBuscaNome] = useState("")
    const [ordem, setOrdem] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [brinquedos, setBrinquedos] = useState([
        {
            nome: "Buzz Lightyear",
            valor: 250,
            imagem: `${buzz}`,
            quantidade: quantidade,
            id: 1
        },
        {
            nome: "Zurg",
            valor: 235,
            imagem: `${zurg}`,
            quantidade: quantidade,
            id: 2
        },
        {
            nome: "ET - Buzz",
            valor: 115,
            imagem: `${ets}`,
            quantidade: quantidade,
            id: 3
        },
        {
            nome: "Buzz Lightyear Patrulheiro Espacial",
            valor: 230,
            imagem: `${buzzFilme}`,
            quantidade: quantidade,
            id: 4
        },
        {
            nome: "LEGO Disney Pixar Caça ao Zyclops",
            valor: 125,
            imagem: `${lego}`,
            quantidade: quantidade,
            id: 5
        },
        {
            nome: "Zurg - Lyghtyear",
            valor: 270,
            imagem: `${zurgFilme}`,
            quantidade: quantidade,
            id: 6
        },
        {
            nome: "Mini Boneco Lightyear Com Nave",
            valor: 95,
            imagem: `${nave}`,
            quantidade: quantidade,
            id: 6
        },
    ])

  

  return (
    <div >
      <GlobalStyle/>
      <Header setTela={setTela} tela={tela}/>
      {tela === 1 ? 
      <Main
      valorMin={valorMin}
      setValorMin={setValorMin}
      valorMax={valorMax}
      setValorMax={setValorMax}
      buscaNome={buscaNome}
      setBuscaNome={setBuscaNome}
      setOrdem={setOrdem}
      brinquedos={brinquedos} 
      carrinho={carrinho}
      ordem={ordem}
      /> 
      : 
      <Carrinho 
      carrinho={carrinho}
      setCarrinho={setCarrinho}
      />} 
      <Footer/>
    </div>
  );
}

export default App;
