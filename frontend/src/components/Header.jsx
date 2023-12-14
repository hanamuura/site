import './Styles/Header.css'
import { Link } from 'react-router-dom'
export function Header(){
    return(
        <header className="header">
        <h1 className="logo">Мой Логотип</h1>
        <nav className="navigation">

          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">О нас</Link>
          <Link to="/contact" className="nav-link">Контакты</Link>
        </nav>
      </header>
    )
}