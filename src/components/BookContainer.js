import BookCards from "./BookCards";
import Search from "./Search";

function BookContainer ({books, setSearch, search}) {

const bookCards = books.map((book) => <BookCards keys={book.id} book = {book}/>);

    return (
        <>
            <Search search={search} setSearch={setSearch} />
            <ul className="cards">
            {bookCards}
            </ul>
        </>
    )
}

export default BookContainer;