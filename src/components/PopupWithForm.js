import React from 'react';

function PopupWithForm({ title, name, isOpen, onClose, fields, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-btn" type="button" aria-label="Закрытие попапа" onClick={onClose}></button>
        <div className="popup__content">
          <h3 className="popup__title">{title}</h3>
          <form className={`popup__form-element popup__form-element_type_${name}`} name={`${name}-form`} onSubmit={onSubmit} >
            {fields.map((field) => (
              <div className="popup__input-container" key={field.name}>
                <input
                  id={field.name}
                  className="popup__text"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
                <span id={`${field.name}-error`} className="popup__error"></span>
              </div>
            ))}
            <button className="popup__save" type="submit" aria-label="Сохранить редактирование">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PopupWithForm;