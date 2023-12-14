import '@/app/Styles/home.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div class="container-info">
        <div class="slider">
          <p>Слайдер</p>
        </div>
        <div class="project">
          <p>Создайте свой первый проект!</p>
          <img src="/фото1.png" />
          <Link href="/create">Создать проект</Link>
        </div>
        <div class="join">
          <p>Присоединиться к проекту</p>
          <img src="/фото2.png" />
          <Link href="/join">Присоединиться</Link>
        </div>
      </div>
    </main>
  )
}
