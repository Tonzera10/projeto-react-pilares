import {GlobalStyle} from "./GlobalStyle";
import {Header} from "./components/Header/Header"
import {Main} from "./components/Main/Main"
import {Footer} from "./components/Footer/Footer"

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Header/>
      {/* <Main/>
      <Footer/> */}
    </div>
  );
}

export default App;
