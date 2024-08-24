import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='d-flex align-items-center justify-content-between px-5 py-2'>
        <Link to='#' className='logo-box'>
          <img src={Logo} />
        </Link>
        <ul className='d-flex gap-5'>
            <Link className='current' to="/">Home</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/services">Services</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/contact">Contact us</Link>
        </ul>
    </nav>
  );
}

export default Nav;
