import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
    openImagePopup();
  };
  const handleClosePopup = () => {
    setSelectedCard(null);
  };
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    handleClosePopup();
  };
  const openImagePopup = () => {
    setImagePopupOpen(true);
  };
  const closeImagePopup = () => {
    setImagePopupOpen(false);
  };
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer 
        />
      </div>
      <div>
        {isEditProfilePopupOpen && (
          <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            fields={[
              { name: 'firstname', type: 'text', placeholder: 'Имя', required: true },
              { name: 'job', type: 'text', placeholder: 'О себе', required: true },
            ]}
          />
        )}
        {isAddPlacePopupOpen && (
          <PopupWithForm
            title="Новое место"
            name="new-place"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            fields={[
              { name: 'place', type: 'text', placeholder: 'Место', required: true },
              { name: 'link', type: 'url', placeholder: 'Ссылка на картинку', required: true },
            ]}
          />
        )}
        {isEditAvatarPopupOpen && (
          <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            fields={[{ name: 'avatar', type: 'url', placeholder: 'Ссылка на аватар', required: true }]}
          />
        )}
        {isImagePopupOpen && selectedCard && (
          <ImagePopup card={selectedCard} onClose={closeImagePopup} />
        )}
      </div>
    </div>
  );
}
export default App;