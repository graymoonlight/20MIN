import '@/app/Styles/join.scss'
import Link from 'next/link'

export default function Join() {
  return (
    <main>
      <div class="join">
        <div class="join2">
          <p>ПРИСОЕДИНИТЬСЯ К ПРОЕКТУ</p>
          <form class="search-form2" action="/search" method="get">
            <input type="text" name="q" placeholder="Поиск..."/>
            <button class="btn2" type="submit">Поиск</button>
          </form>
          <div class="user2">
            <Link href="/view">Присоединиться</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
