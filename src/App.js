import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  );
}
export default App;