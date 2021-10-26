function BookCards ({book : {title, author, genre, cover}}) {
    return (
        <li className="card">
        
            <img src={cover} alt={title} />
            <h4>{title}</h4>
            <p>{author}</p>
            <p>{genre}</p>
            
           
        </li>
      );
}

export default BookCards;