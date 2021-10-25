function BookCards ({book : {title, author, genre, cover}}) {
    return (
        <li className="cards__item">
          <div className="card">
            <img
              src={cover}
              alt={title}
              className="card__image"
            />
            <div className="card__content">
              <div className="card__title">{title}</div>
              <div className="card__detail">
              </div>
            </div>
          </div>
        </li>
      );
}

export default BookCards;