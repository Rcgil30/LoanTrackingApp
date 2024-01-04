import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Inversiones Gil</h1>
            <img src={logo} alt="Logo" />
            <div className="links">
                <Link to="/">Inicio</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;