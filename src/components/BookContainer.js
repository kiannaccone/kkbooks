import BookCards from "./BookCards";
import Search from "./Search";

function BookContainer ({books}) {

const bookCards = books.map((book) => <BookCards keys={book.id} book = {book}/>);

    return (
        <ul className="cards">
        {bookCards}
        </ul>
    )
}

export default BookContainer;