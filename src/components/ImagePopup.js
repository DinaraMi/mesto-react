import React from 'react';

function ImagePopup({ card, onClose }) {
  const handleClosePopupImages = () =>{
    onClose();
  }
  return (
    <div className={`popup popup_type_images ${card ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_size_m">
        <button className="popup__close-btn popup__close-btn_size_l" type="button" aria-label="Закрыть окно" onClick={handleClosePopupImages}></button>
        <img className="popup__image" src={card.link} alt="Выбранное изображение" />
        <h2 className="popup__title popup__title_type_images">{card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;