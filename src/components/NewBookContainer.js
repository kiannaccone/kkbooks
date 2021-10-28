function NewBookContainer ({bookAdd}) {

    const showNewBook = (
        <div key= {bookAdd.id}> 
        <h2>{bookAdd.title}</h2>
        <p>{bookAdd.author}</p>
        <p>{bookAdd.genre}</p>
        <img src={bookAdd.cover} alt={bookAdd.title} /> 
        </div> 
        );

    return (
    <div>{showNewBook}</div>
    )
}

export default NewBookContainer;