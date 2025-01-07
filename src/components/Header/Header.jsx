import logo from "../../assets/logo2.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="AOP Logo" />
      <div className="header__nav-container">
        <button className="header__shuffle-button">Shuffle</button>
        <button className="header__login-button">Login</button>
        <button className="header__signup-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
