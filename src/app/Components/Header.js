import Link from "next/link";
import '@/app/Styles/header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/"><img src="/иконка.png" alt="Логотип"/></Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/about">О нас</Link></li>
          <li><Link href="/create">Создать проект</Link></li>
          <li><Link href="/join">Присоединиться</Link></li>
          <li><Link href="/top">Топ проектов</Link></li>
        </ul>
      </nav>
      <form className="search-form" action="/search" method="get">
        <input type="text" name="q" placeholder="Поиск..." />
        <button type="submit">Найти</button>
      </form>
      <div className="user">
        <Link href="/auth/login">Войти</Link>
      </div>
    </header>
  );
}
