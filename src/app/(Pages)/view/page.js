import '@/app/Styles/view.scss'

export default function View() {
    return (
      <main>
        <div className="editing">
          <div className="block11">
            <div className="form">
              <div className="form1">
                <input className="input" type="text" placeholder="статус проекта"/>
                <input className="input" type="text" placeholder="форма для ввода"/>
              </div>
              <div className="form2">
                <input className="input" type="text" placeholder="название проекта"/>
                <input className="input" type="text2" placeholder="описание проекта"/>
                <input className="input" type="text" placeholder="ссылка Figma"/>
                <input className="input" type="text" placeholder="ссылка Git"/>
              </div>
              <div className="text_edit">поле для рисования</div>
                <a href="#">Изменить</a>
              </div>
            </div>
            <div className="block12">
              <div className="text_edit1">название проекта</div>
                <img src="Mask group (5).png"/>
              <div className="participants">
                <p>Участники</p>
              </div>
              <div className="btn_edit">
                <a href="#">Покинуть проект</a>
              </div>
            </div>
          </div>
      </main>
    )
  }