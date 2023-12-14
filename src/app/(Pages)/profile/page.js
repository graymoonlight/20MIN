import '@/app/Styles/profile.scss'

export default function Profile() {
    return (
      <main>
        <div class="Portfolio">
          <h1>ПОРТФОЛИО</h1>
          <form class="search-form" action="/search" method="get">
            <input type="text" name="q" placeholder="Поиск..."/>
            <button type="submit">Найти</button>
          </form>
          <div class="Photo"></div>
          <div class="Login">Логин</div>
          <div class="input-container">
            <label for="role-1">Пароль:</label>
            <input type="text" id="role-1"/>
          </div>
          <div class="Line1">
            <hr align="center" width="649px" color="white" size="3px" />
          </div>
          <div class="Section1">Название проекта</div>
          <div class="Section11">Роль</div>
          <div class="input-container1">
            <label for="role-1">Участники:</label>
            <input type="text" id="role-1"/>
          </div>
          <div class="input-container2">
            <label for="participants-1">Редактировать:</label>
            <input type="text" id="participants-1"/>
          </div>
          <div class="Line2">
            <hr width="649px" color="white" size="3px" />
          </div>
          <div class="Section2">Название проекта</div>
          <div class="Section22">Роль</div>
          <div class="Line3">
            <hr width="649px" color="white" size="3px" />
          </div>
          <div class="input-container11">
            <label for="role-1">Участники:</label>
            <input type="text" id="role-1"/>
          </div>
          <div class="input-container22">
            <label for="participants-1">Редактировать:</label>
            <input type="text" id="participants-1"/>
          </div>
          <div class="Section3">Название проекта</div>
          <div class="Section33">Роль</div>
          <div class="input-container111">
            <label for="role-1">Участники:</label>
            <input type="text" id="role-1"/>
          </div>
          <div class="input-container222">
            <label for="participants-1">Редактировать:</label>
            <input type="text" id="participants-1"/>
          </div>
          <div class="Line4">
            <hr width="649px" color="white" size="3px" />
          </div>
          <div class="Section4">Название проекта</div>
          <div class="Section44">Роль</div>
          <div class="input-container1111">
            <label for="role-1">Участники:</label>
            <input type="text" id="role-1"/>
          </div>
          <div class="input-container2222">
            <label for="participants-1">Редактировать:</label>
            <input type="text" id="participants-1"/>
          </div>
          <div class="Line5">
            <hr width="649px" color="white" size="3px" />
          </div>
          <div class="Section5">Название проекта</div>
          <div class="Section55">Роль</div>
          <div class="input-container11111">
            <label for="role-1">Участники:</label>
            <input type="text" id="role-1"/>
          </div>
          <div class="input-container22222">
            <label for="participants-1">Редактировать:</label>
            <input type="text" id="participants-1"/>
          </div>
          <div class="Line6">
            <hr width="649px" color="white" size="3px" />
          </div>
        </div>
      </main>
    )
  }