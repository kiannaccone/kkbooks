import styled from 'styled-components';


function NewBookContainer ({bookAdd}) {

    const showNewBook = (
        <Cards key= {bookAdd.id}> 
        {/* <p>{bookAdd.genre}</p> */}
        <img src={bookAdd.cover} alt={bookAdd.title} /> 
        <h4>{bookAdd.title}</h4>
        <p><i>{bookAdd.author}</i></p>
        </Cards> 
        );

    return (
    <div>{showNewBook}</div>
    )
}

export default NewBookContainer;

const Cards = styled.div`
    margin 5rem;
    width: 300px;
    height: 100%;
    
    img{
        width: 120%;
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