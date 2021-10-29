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
            <Quote>
                <p>“No. I can survive well enough on my own — if given the proper reading material.”
                ―Sarah J. Maas, Throne of Glass</p>
            </Quote>
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
    padding-bottom:2em;
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
const Quote = styled.div `
    margin-top: 1rem;
    padding: 1rem;
    background-color: #DDA15E;
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    font-family: 'Libre Baskerville', serif;
`
