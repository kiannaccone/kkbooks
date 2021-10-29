import BookCards from "./BookCards";
import Search from "./Search";
import styled from 'styled-components';
import Genre from "./Genre";

function BookContainer ({books, setSearch, search}) {

const bookCards = books.map((book) => <BookCards key={book.id} book = {book}/>);

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <Genre search={search} setSearch={setSearch}/>
            <CardContainer className="cards">
            {bookCards}
            <>
        <Quote>
            <p>“I love the sound of the pages flicking against my fingers. Print against fingerprints. Books make people quiet, yet they are so loud.”
            ―Nnedi Okorafor</p>
        </Quote>
        </>
            </CardContainer>
        </div>
    )
}

export default BookContainer;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Quote = styled.div `
    margin-top: 1rem;
    padding: 1rem;
    background-color: #720026;
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    font-family: 'Libre Baskerville', serif;
    p{
        color:white
    }
`