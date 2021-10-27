import {useState} from 'react'


function BookDate ({books}) {

    const [bookLove, setBookLove] = useState({})

    const bookRec = (
    <div key= {bookLove.id}> 
    <h2>{bookLove.title}</h2>
    <p>{bookLove.author}</p>
    <p>{bookLove.genre}</p>
    <img src={bookLove.cover} alt={bookLove.title} /> 
    </div> 
    );

    const randomBook = (e) => {
        setBookLove(books[Math.floor(Math.random() * books.length + 0 )])
    }

    return (
        <div>
        <h1>Book Date!!!</h1>
            <button onClick={(e) => randomBook()} >Blind Date with a Book</button>
            <div>{bookRec}</div>
        </div>
    );
}

export default BookDate;