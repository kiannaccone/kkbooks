import styled from 'styled-components';

function BookCards ({book : {title, author, genre, cover}}) {
    return (
        <Cards>
            <h3>{title}</h3> 
            <img src={cover} alt={title} /> 
            <p>Written by: {author}
            <br/>Genre: {genre}</p>
        </Cards>
    );
}

export default BookCards;

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem;
    width: 50%;
    border: 5px outset;
    img{
        width: 30%
    }
    p{
        padding: 3px;
        text-align: center; 
    }
`