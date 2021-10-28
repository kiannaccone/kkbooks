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
        <Container>
            <BigButton onClick={(e) => randomBook()}>🖤 click me to have blind date with a book 🖤</BigButton>
            <Cards>{bookRec}</Cards>
        </Container>
    );
}

export default BookDate;

const Container = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    
`


const BigButton = styled.button `
    font-family: 'Libre Baskerville', serif;
    font-size: 1.25em;
    margin: 0.25em;
    padding: 1em 1em;
    border: 2px solid black;
    border-radius: 3px;
    object-positon: center;
    align-self:center;

`

const Cards = styled.div`
    margin 3rem;
    width: 400px;
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
        font-size: 130%
    }
    p{
        font-family: 'Libre Baskerville', serif;
        color: grey;
        font-size: 100%
    }
`
