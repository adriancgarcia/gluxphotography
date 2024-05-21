 const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
    return (
        <nav className={`menu-container ${navbarOpen ? "expanded": ""}`}>
            <ul className='menu-list'>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Home</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>About</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Weddings</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Quinces</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Family</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Maternity</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Portraits</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Events</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Videos</a>
                </li>
                <li className='nav-li'>
                    <a href="/#contact" className='nav-link' onClick={() => setNavbarOpen(false)}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default MenuOverlay;