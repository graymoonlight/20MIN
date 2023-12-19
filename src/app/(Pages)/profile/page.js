'use client'
import '@/app/Styles/Profile.scss'


const data = [
  {name:"NameProject",role:"Участник",status:"В разработке"},
  {name:"NameProject",role:"Участник",status:"В разработке"},
  {name:"NameProject",role:"Участник",status:"В разработке"},
  {name:"NameProject",role:"Участник",status:"В разработке"},
]
export default function Profile({openModalPassword}) {
    return (
      <main>
        <div className="Profile">
          <h1>Портфолио</h1>

          <div className="Profile__search">
            <div className="Profile__search__input">
                <input type="text" placeholder="Поиск" />
                <img src="Lupa.png" />
            </div>
          </div>

        <div className="Profile__container">
          <div className="Profile__container__user">
            <div className="Profile__container__user__avatar">
                <img src="pencil.png" />
            </div>
            <div className="Profile__container__user__login">
                <p>Логин</p>
                <input type="button" onClick={() => openModalPassword()} value="Изменить пароль" />
            </div>
        </div>

        <div className="Profile__container__project">
            {data.map((item, index)=>(
                <div className="Profile__container__project__item"
                key={index}
                >
                    <div className="Profile__container__project__item__number">
                        <p>{index + 1}</p>
                    </div>
                    <div className="Profile__container__project__item__name">
                        <div className="Profile__container__project__item__name__h1">
                            <h1>{item.name}</h1>
                        </div>
                        <div className="Profile__container__project__item__name__role">
                            <p>{item.role}</p>
                            <p>{item.status}</p>
                        </div> 
                    </div>
                </div>
            ))}
        </div>
        </div>    
      
        </div>
      </main>
    )
  }