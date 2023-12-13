import Link from "next/link";
import '@/app/Styles/authorization.scss';

export default function Login() {
    return (
      <main>
        <form className="form" action="" method="post">
          <h1>Авторизация</h1>
          <input className="input" type="text" placeholder="логин" />
          <input className="input" type="email" placeholder="пароль" />
          <button className="btn" type="submit">Войти</button>
          <Link href="/auth/register" className="Akk">Нет аккаунта?</Link>
        </form>
      </main>
    )
  }