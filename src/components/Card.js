import React from "react";
import CurrentUserContext from '../contexts/CurrentUserContext';
import Trash from '../images/Trash.png'

function Card ({ card, onCardClick, onCardLike, onCardDelete} ) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  // нужно решить почему всегда показыввет false;
  //console.log(isLiked)
  const cardLikeButtonClassName = ( 
    `group__vector ${isLiked && 'group__vector_active' }` 
  )
  const handleClick = () => {
    onCardClick(card);
  }
  const handleLikeClick = () => {
    onCardLike(card);
  }
  const handleDeleteClick = () => {
    onCardDelete(card)
  }
  return(
    <div className="group__element">
      <img className="group__mask" style={{ backgroundImage: `url(${card.link})` }} src={card.link.toString()} alt={card.name} onClick={handleClick}/>
      {isOwn && <button className='group__delite' onClick={handleDeleteClick}>
        <img className="group__img" src={Trash} alt="Картинка удаления"/>
      </button>}
      <div className="group__text">
        <h2 className="group__paragraph">{card.name}</h2>
        <div className="group__likes">
          <button className={cardLikeButtonClassName} type="button" aria-label="Поставить лайк" onClick={handleLikeClick}></button>
          <p className="group__counter_likes">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}
export default Card