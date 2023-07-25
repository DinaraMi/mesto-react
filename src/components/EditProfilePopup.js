import React, { useEffect, useContext } from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from '../contexts/CurrentUserContext';
import useFormValidation from '../utils/useFormValidation';

function EditProfilePopup ({ isOpen, onClose, onUpdateUser} ) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, isInputValid, handleChange, reset, setValue } = useFormValidation();
  useEffect(() => {
    if (currentUser) {
        setValue('firstname', currentUser.name);
        setValue('job', currentUser.about);
    }
  }, [currentUser, setValue]);
  const resetForClose = () =>{
    onClose();
    reset({ firstname: currentUser.name, job: currentUser.about })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
        name: values.firstname,
        about: values.job,
    }, reset);
  }
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={resetForClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      fields={[
        { name: 'firstname', type: 'text', placeholder: 'Имя', required: true, minLength: 2, maxLength: 40, value: values.firstname || '', errors: errors, isInputValid: isInputValid, onChange: handleChange },
        { name: 'job', type: 'text', placeholder: 'О себе', required: true, minLength: 2, maxLength: 200, value: values.job || '', errors: errors, isInputValid: isInputValid, onChange: handleChange },
      ]}
    />
  )
}
export default EditProfilePopup