import React, { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import CurrentCardsContext from '../contexts/CurrentCardsContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = useState([]);
  useEffect(()=>{
    api.getUserInformation()
    .then((data)=>{
      setCurrentUser({ name: data.name, about: data.about, avatar: data.avatar })
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);
  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleUpdateUser = (userData) => {
    //console.log("Updated user data:", userData);
    api.editUserInformation(userData)
    .then((data) => {
      //console.log("Updated user data:", data);
      setCurrentUser(data); 
      closeAllPopups(); 
    })
    .catch((error) => {
      console.log(error);
    });
  }
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
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (isLiked) {
      api.deleteLike(card._id).then((newCard) => {
        //console.log("Response from deleteLike:", newCard);
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    } else {
      api.addLike(card._id).then((newCard) => {
        //console.log("Response from addLike:", newCard);
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }
  };
  const handleCardDelete = (card) => {
    const isOwn = card.owner._id === currentUser._id;
    if (!isOwn) {
      return;
    }
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => {
        console.log(error);
      });
    }
  return (
    <div className="body">
      <div className="page">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <CurrentCardsContext.Provider value={cards}>
            <Main
              onEditProfile={handleEditProfileClick}
              onUpdateUser={handleUpdateUser}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          </CurrentCardsContext.Provider>
        </CurrentUserContext.Provider>
        <Footer 
        />
      </div>
      <div>
      {isEditProfilePopupOpen && (<EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
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