import React from "react";

function Card ({ card, onCardClick} ) {
    const handleClick = () => {
        onCardClick(card);
    }
    return(
          <div className="group__element">
            <img className="group__mask" style={{ backgroundImage: `url(${card.link})` }} alt={card.title} onClick={handleClick}/>
            <div className="group__text">
              <h2 className="group__paragraph">{card.title}</h2>
              <div className="group__likes">
                <button className="group__vector" type="button" aria-label="Поставить лайк"></button>
                <p className="group__counter_likes">{card.likes.length}</p>
              </div>
            </div>
          </div>
        
    )
}
console.log(Card.link);
export default Card