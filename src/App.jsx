import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
    <header className="header">
      <img className="header__logo" src="<%=require('./images/Vector.svg')%>" alt="логотип" />
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button className="profile__avatar-button" type="button" aria-label="Обновить аватарку">
            <img className="profile__avatar" src="#" alt="Жак-Ив-Кусто" />
            <span className="profile__avatar-edit-icon"></span>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__informs">
            <h1 className="profile__title"></h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать">
              <img className="profile__vector" src="<%=require('./images/vectorButton.svg')%>" alt="Кнопка редактирования" />
            </button>
          </div>
            <p className="profile__subtitle"></p>
        </div>
          <button className="profile__add-button" type="button" aria-label="Добавить картинку"></button>
      </section>
      <section className="group">
      </section>
    </main>
    <footer className="footer">
      <p className="footer__paragraph">© 2020 Mesto Russia</p>
    </footer>
  </div>
  );
}

export default App;
