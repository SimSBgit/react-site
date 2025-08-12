import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <div className="flexbox">
        <Link to="/react-site/Work0808">Work0808</Link>
      </div>
      <div className="flexbox">
        <Link to="/react-site/Work0811">Work0811</Link>
      </div>
      <div className="flexbox">
        <Link to="/react-site/Work0812">Work0812</Link>
      </div>
    </div>
  );
}

export default Menu;