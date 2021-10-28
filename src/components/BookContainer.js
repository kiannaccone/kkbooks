import BookCards from "./BookCards";
import Search from "./Search";
import styled from 'styled-components';

function BookContainer ({books, setSearch, search}) {

const bookCards = books.map((book) => <BookCards key={book.id} book = {book}/>);

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <CardContainer className="cards">
            {bookCards}
            </CardContainer>
        </div>
    )
}

export default BookContainer;

 const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // div: hover{
    //     width:410px;
    //     height: 160px;
    }
`

// const CardContainer = styled.div`
//     display: grid;
//     float:left,
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'center'
// `