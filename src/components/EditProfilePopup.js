import React, { useEffect, useContext, useState } from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  }
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }
  }, [currentUser]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      buttonLabel="Сохранить"
      onChange={handleNameChange}
      onSubmit={handleSubmit}
      fields={[
        { name: 'firstname', type: 'text', placeholder: 'Имя', required: true, minLength: 2, maxLength: 40,
        value: name, onChange: handleNameChange },
        { name: 'job', type: 'text', placeholder: 'О себе', required: true, minLength: 2, maxLength: 200,
        value: about, onChange: handleAboutChange },
      ]}
    />
  )
}
export default EditProfilePopup