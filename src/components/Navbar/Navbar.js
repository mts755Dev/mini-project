import './Navbar.css';
import burger from '../../assets/images/burger-logo.png';
const Navbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar_Logo">
        <div className="Logo">
          <img src={burger} alt="myBurger"/>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
