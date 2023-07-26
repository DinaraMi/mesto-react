import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      title: name,
      link: link,
    });
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };
  return (
    <PopupWithForm
      title="Новое место"
      name="new-place"
      isOpen={isOpen}
      onChange={handleNameChange}
      onSubmit={handleSubmit}
      onClose={onClose}
      isLoading={isLoading}
      buttonLabel="Создать"
      fields={[
        {
          name: 'place', type: 'text', placeholder: 'Место', required: true, minLength: 2, maxLength: 30,
          value: name, onChange: handleNameChange
        },
        {
          name: 'link', type: 'url', placeholder: 'Ссылка на картинку', required: true,
          value: link, onChange: handleLinkChange
        },
      ]}
    />
  );
}
export default AddPlacePopup;