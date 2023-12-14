import "@/app/Styles/editing.scss"

export default function Editing() {
    return (
      <main>
        <div class="editing">
          <div class="block11">
            <div class="form">
              <div class="form1">
                <input class="input" type="text" placeholder="статус проекта"/>
                <input class="input" type="text" placeholder="создатель"/>
              </div>
              <div class="form2">
                <input class="input" type="text" placeholder="название проекта"/>
                <input class="input" type="text2" placeholder="описание проекта"/>
                <input class="input" type="text" placeholder="ссылка Figma"/>
                <input class="input" type="text" placeholder="ссылка Git"/>
              </div>
              <div class="text_edit">поле для рисования</div>
              <a href="#">Изменить</a>
              <a href="#">Публикация</a>
            </div>
          </div>
          <div class="block12">
            <div class="text_edit1">название проекта</div>
            <img src="Mask group (4).png"/>
            <div class="participants">
              <p>Участники</p>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <a href="#">Добавить</a>
            </div>
            <div class="btn_edit">
              <a href="#">Удалить проект</a>
            </div>
          </div>
        </div>
      </main>
    )
  }