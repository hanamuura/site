import './Styles/Header.css'
export function Header(){
    return(
        <header className="header">
        <h1 className="logo">Мой Логотип</h1>
        <nav className="navigation">

          <a href="/" className="nav-link">Главная</a>
          <a href="/about" className="nav-link">О нас</a>
          <a href="/contact" className="nav-link">Контакты</a>
        </nav>
      </header>
    )
}