import '@/app/Styles/create.scss'
import Link from 'next/link';

export default function Create() {
  return (
    <main>
      <div class="project">
        <div class="create_pr">
          <h1 class="text">СОЗДАНИЕ ПРОЕКТА</h1>
          <div class="block">
            <div class="form">
              <input class="input" type="text" placeholder="название проекта"/>
              <input class="input2" type="text" placeholder="описание проекта"/>
              <input class="input" type="text" placeholder="ссылка Figma"/>
              <input class="input" type="text" placeholder="ссылка Git"/>
            </div>
            <img src="icon.png"/>
          </div>
          <Link href="/editing">Создать</Link>
        </div>
      </div>
    </main>
  )
}
