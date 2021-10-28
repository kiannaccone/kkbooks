import {useState} from 'react'
import styled from 'styled-components';


function BookDate ({books}) {

    const [bookLove, setBookLove] = useState({})

    const bookRec = (
    <div key= {bookLove.id}>
    {/* <p>{bookLove.genre}</p> */}
    <img src={bookLove.cover} alt={bookLove.title} /> 
    <h2>{bookLove.title}</h2>
    <p>{bookLove.author}</p>
    </div> 
    );

    const randomBook = (e) => {
        setBookLove(books[Math.floor(Math.random() * books.length + 0 )])
    }

    return (
        <div>
            <BigButton onClick={(e) => randomBook()} >Blind Date with a Book</BigButton>
            <Cards>{bookRec}</Cards>
        </div>
    );
}

export default BookDate;


const BigButton = styled.button `
    font-family: 'Libre Baskerville', serif;
    width: 50%;
    height: 50%;
`

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align:center;
    padding-right: 3em;
    img{
        width: 110%;
    }
    h4{
        font-family: 'Libre Baskerville', serif;
        font-weight: bolder;
        color: black;
        font-size: 100%
    }
    p{
        font-family: 'Libre Baskerville', serif;
        color: grey;
        font-size: 85%
    }
`
