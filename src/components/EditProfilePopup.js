import React, { useEffect, useState } from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup ({ isOpen, onClose, onUpdateUser} ) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Submitting profile update:", { name, about: description });
    onUpdateUser({
      name: name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onUpdateUser={handleSubmit}
      fields={[
        { name: 'firstname', type: 'text', placeholder: 'Имя', required: true, defaultValue: name, onChange: {handleNameChange} },
        { name: 'job', type: 'text', placeholder: 'О себе', required: true, defaultValue: description, onChange: {handleDescriptionChange} },
      ]}
    />
  )
}
export default EditProfilePopup