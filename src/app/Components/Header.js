'use client'
import Link from "next/link";
import '@/app/Styles/header.scss';

export default function Header({ openModal }) {
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
          <Link href="/projects">Проекты</Link>
          <input type="button" onClick={() => openModal("login")} value="Войти" />
          <Link href="/profile/:id">
            <img src="usericon.png" alt="User" />
          </Link>
        </div>
      </div>
    </header>
  );
}
