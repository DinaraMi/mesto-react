import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import useFormValidation from "../utils/useFormValidation";

function EditAvatarPopup ({ isOpen, onClose, onUpdateAvatar }) {
    const { values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation();
    const resetForClose = () =>{
        onClose();
        reset();
      }
    const avatarInputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateAvatar({
          link: avatarInputRef.current.value,
        }, reset);
    }
    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isOpen}
            onClose={resetForClose}
            isValid={isValid}
            onChange={handleChange}
            onSubmit={handleSubmit}
            fields={[
                { name: 'avatar', type: 'url', placeholder: 'Ссылка на аватар', required: true,
                ref: avatarInputRef, value: values.avatar || '', errors: errors, isInputValid: isInputValid}
            ]}
        />
    );
}

export default EditAvatarPopup;
