import BookCards from "./BookCards";
import Search from "./Search";
import styled from 'styled-components';

function BookContainer ({books, setSearch, search}) {

const bookCards = books.map((book) => <BookCards key={book.id} book = {book}/>);

    return (
        <CardContainer>
            <Search search={search} setSearch={setSearch} />
            <ul className="cards">
            {bookCards}
            </ul>
        </CardContainer>
    )
}

export default BookContainer;

const CardContainer = styled.div`
    display: grid;
    list-style: none;
    margin: 0;
    grid-template-rows: repeat(3, auto);
`