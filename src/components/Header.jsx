import Logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={Logo} alt="Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
