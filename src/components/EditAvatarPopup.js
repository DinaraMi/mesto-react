import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      link: avatarInputRef.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      buttonLabel="Сохранить"
      onSubmit={handleSubmit}
      fields={[
        {
          name: 'avatar',
          type: 'url',
          placeholder: 'Ссылка на аватар',
          required: true,
          ref: avatarInputRef,
        }
      ]}
    />
  );
}
export default EditAvatarPopup;