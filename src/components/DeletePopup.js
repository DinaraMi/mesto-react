function DeletePopup ({ isOpen, onClose, onSubmit, isLoading}) {
    const handleCloseDeletePopup = () => {
        onClose();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
      }
    return(
        <div className={`popup popup_type_delite-card ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container popup__container_size_xl">
      <button className="popup__close-btn popup__close-btn_size_xll" type="button" aria-label="Закрыть окно" onClick={handleCloseDeletePopup}></button>
      <div className="popup__content">
        <h3 className="popup__title popup__title_type_delite-card">Вы уверены?</h3>
        <form className="popup__form-element popup__form-element_type_delite-card" name="delite-card" novalidate onSubmit={handleSubmit}>
          <button className="popup__save popup__save_type_delite-card" type="submit" aria-label="Удалить карточку">{isLoading ? 'Да ...' : 'Да'}</button>
        </form>
      </div>
    </div>
    </div>
    )
}

export default DeletePopup;