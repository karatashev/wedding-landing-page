import "./Navbar.css"
import logo from "../../images/logo-light.png"

const Navbar = () => {
  return (
    <nav className="menu">
    <div className="inner">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <ul>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </div>
  </nav>
  );
}
 
export default Navbar;