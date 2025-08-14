import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h2>홈 페이지</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>    
          <li>
            <Link to="work0808">Work0808</Link>
          </li>    
          <li>
            <Link to="work0811">Work0811</Link>
          </li>    
          <li>
            <Link to="work0812">Work0812</Link>
          </li>    
          <li>
            <Link to="work0813">Work0813</Link>
          </li>  
          <li>
            <Link to="work0814">Work0814</Link>
          </li>  
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
export default Layout;