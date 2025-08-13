import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Work0808 from './Work0808'
import Work0811 from './Work0811'
import Work0812 from './Work0812'

function Mywork() {

  return (
    <div className="container">
      <div className="flexbox">
        <Link to="work0808">Work0808</Link>
      </div>
      <div className="flexbox">
        <Link to="work0811">Work0811</Link>
      </div>
      <div className="flexbox">
        <Link to="work0812">Work0812</Link>
      </div>
        <Routes>
          <Route path="work0808" element={<Work0808 />} />
          <Route path="work0811" element={<Work0811 />} />
          <Route path="work0812" element={<Work0812 />} />
        </Routes>
    </div>
  );
}

export default Mywork;