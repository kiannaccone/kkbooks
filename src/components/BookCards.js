import styled from 'styled-components';

function BookCards ({book : {title, author, genre, cover}}) {
    return (
        <Cards>
            <img src={cover} alt={title} /> 
            <h4>{title}</h4> 
            <p><i>{author}</i></p>
            {/* <br/>Genre: {genre}</p> */}
        </Cards>
    );
}

export default BookCards;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align:center;
    border-right: 1px solid grey;
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