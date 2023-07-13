import React, { useEffect, useState } from 'react';
import vectorButton from '../images/vectorButton.svg';
import Card from './Card';
import { api } from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getUserInformation()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Обновить аватарку"
            onClick={onEditAvatar}
          >
            {userAvatar && (
              <img
                className="profile__avatar"
                src={userAvatar.toString()}
                alt="Аватар"
                style={{ backgroundImage: `url(${userAvatar})` }}
              />
            )}
            <span className="profile__avatar-edit-icon"></span>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__informs">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={onEditProfile}
            >
              <img className="profile__vector" src={vectorButton} alt="Кнопка редактирования" />
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить картинку"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="group">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;