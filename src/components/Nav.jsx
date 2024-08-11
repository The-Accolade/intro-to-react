import Logo from '../assets/images/Logo.png'

function Nav() {
  return (
    <nav className='d-flex align-items-center justify-content-between px-5 py-2'>
        <a href='#' className='logo-box'>
            <img src={Logo} />
        </a>
        <ul className='d-flex gap-5'>
            <a className='current' href="#">Home</a>
            <a href="#">How it works</a>
            <a href="#">Services</a>
            <a href="#">Locations</a>
            <a href="#">Contact us</a>
        </ul>
    </nav>
  );
}

export default Nav;
