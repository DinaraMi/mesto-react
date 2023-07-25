import useFormValidation from "../utils/useFormValidation";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({ isOpen, onClose, onAddPlace }) {
    const { values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation();
    const resetForClose = () =>{
        onClose();
        reset();
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        onAddPlace({
          title: values.place,
          link: values.link,
        }, reset);
    }
return(
<PopupWithForm
            title="Новое место"
            name="new-place"
            isOpen={isOpen}
            isValid={isValid}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onClose={resetForClose}
            fields={[
              { name: 'place', type: 'text', placeholder: 'Место', required: true, minLength: 2, maxLength: 30,
              value: values.place || '', errors: errors, isInputValid: isInputValid},
              { name: 'link', type: 'url', placeholder: 'Ссылка на картинку', required: true,
              value: values.link || '', errors: errors, isInputValid: isInputValid },
            ]}
          />
)
}
export default AddPlacePopup;