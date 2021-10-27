function NewBookContainer ({newBook, handleSubmit}) {

    const showNewBook = (
        <div key= {newBook.id}> 
        <h2>{newBook.title}</h2>
        <p>{newBook.author}</p>
        <p>{newBook.genre}</p>
        <img src={newBook.cover} alt={newBook.title} /> 
        </div> 
        );

    return (
    <div>{showNewBook}</div>
    )
}

export default NewBookContainer;