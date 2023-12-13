import Link from "next/link";
import '@/app/Styles/registration.scss';

export default function Register() {
    return (
      <main>
        <form className="form" action="" method="post">
          <h1>Регистрация</h1>
          <input className="input" type="text" placeholder="логин" />
          <input className="input" type="email" placeholder="пароль" />
          <button className="btn" type="submit">Зарегистрироваться</button>
          <Link href="/auth/login" className="Akk">Уже есть аккаунт?</Link>
        </form>
      </main>
    )
  }