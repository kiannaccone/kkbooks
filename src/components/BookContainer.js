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
    coulum: 4;
    flex-flow: column wrap;
    padding-top: 20%;
`