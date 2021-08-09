import "./App.css";
//import "../src/Botshot/Header.css";
//import "./scss/Main.css";
//import { Header } from "./Botshot/Header";
// import { Botshot } from "./Botshot/botshot";
import { Home } from "./Component/Home/Home";
import { Input } from "./Component/Input/Input";
// import { Main } from "./MainPage/Main";

function App() {
  return (
    <div className="App">
      {/* <Botshot /> */}
      <Home />
      {/* <Header /> */}
      {/* <Main /> */}
      <Input />
    </div>
  );
}

export default App;
