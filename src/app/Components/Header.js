'use client'
import Link from "next/link";
import '@/app/Styles/header.scss';

export default function Header() {
  const openModal = (type) => {
    console.log(`Open modal with type: ${type}`);
  };

  return (
    <header className="Header">
      <div className="Header__logo">
        <Link href="/">
            <img src="Logo__header.png" alt="Logo" />
        </Link>
      </div>
      
      <div className="Header__nav">
        <div className="Header__nav-link">
          <Link href="/about">О нас</Link>
          <Link href="/newproject">Создать проект</Link>
          <Link href="/join">Присоединиться</Link>
          <input type="button" onClick={() => openModal("login")} value="Войти" />
        </div>

        <div className="Header__nav-search">
          <div className="Header__nav-search--bar">
            <input type="text" placeholder="Поиск"/>
            <img src="Lupa.png" alt="Search" />
          </div>
          <Link href="/profile">
              <img src="usericon.png" alt="User" />
          </Link>
        </div>
      </div>
    </header>
  );
}

