import Link from "next/link";
import '@/app/Styles/footer.scss';

export default function Footer() {
    return (
      <footer>
        <div className="logo2">
          <Link href="/"><img src="/иконка.png" alt="Логотип"/></Link>
        </div>
        <nav className="nav_footer">
          <ul>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/create">Создать проект</Link></li>
            <li><Link href="/join">Присоединиться</Link></li>
            <li><Link href="/top">Топ проектов</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>
        <div className="contact">
          <img src="/Instagram.png" />
          <img src="/VK com.png" />
          <img src="/Telegram App.png" />
        </div>
      </footer>
    )
  }