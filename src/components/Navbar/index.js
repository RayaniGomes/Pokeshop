import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
    const [ativo, setAtivo] = useState(true);
    const navigate = useNavigate();

    const toggleMode = () => {
        setAtivo(!ativo);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (sectionId) => {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 0);
    };

    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to="/"><img src='img/logoNav.png' alt="Logo" /></Link>
            </div>
            <div className={ativo ? 'menu menuOpen' : 'menu manuClose'}>
                <div className='menuLista'>
                    <Link className='menuLink' to="/"onClick={() => handleNavClick('home')}>Home</Link>
                    <Link className='menuLink' to="/" onClick={() => handleNavClick('ofertas')}>Ofertas Diárias</Link>
                    <Link className='menuLink' to="/pokedex">Pokédex</Link>
                    <Link className='menuLink' to="/"onClick={() => handleNavClick('contato')}>Contato</Link>
                </div>
            </div>
            <form className='form'>
                <input type="search" placeholder='O que você procura?' />
                <button>
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <div className='carrinho'>
                <Link to="/carrinho"><i className="bi bi-cart"></i></Link>
                <button className='hamburgue' onClick={toggleMode}><i className="bi bi-list"></i></button>
            </div>
        </nav>
    );
}

export default Navbar;
