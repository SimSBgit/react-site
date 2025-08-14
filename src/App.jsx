import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work0808 from './compo/Work0808';
import Work0811 from './compo/Work0811';
import Work0812 from './compo/Work0812';
import Work0813 from "./compo/Work0813";
import Work0814 from "./compo/Work0814";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <h1>과제방</h1>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="work0808" element={<Work0808 />} />
            <Route path="work0811" element={<Work0811 />} />
            <Route path="work0812" element={<Work0812 />} />
            <Route path="work0813" element={<Work0813 />} />
            <Route path="work0814" element={<Work0814 />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;