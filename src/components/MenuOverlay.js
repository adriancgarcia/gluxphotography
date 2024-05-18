 const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
    return (
        <nav className={`menu-container ${navbarOpen ? "expanded" : ""}`}>
            <ul className='menu\-list'>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Home</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>About</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>My Work</a>
                </li>
                <li className='nav-li'>
                    <a href="/" className='nav-link' onClick={() => setNavbarOpen(false)}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default MenuOverlay;