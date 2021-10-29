import styled from 'styled-components';


function NewBookContainer ({bookAdd}) {

    const showNewBook = (
        <>
            <Cards key= {bookAdd.id}> 
            {/* <p>{bookAdd.genre}</p> */}
            <img src={bookAdd.cover} alt={bookAdd.title} /> 
            <h4>{bookAdd.title}</h4>
            <p><i>{bookAdd.author}</i></p>
            </Cards> 
            <Quote>
            <p>“Reading one book is like eating one potato chip.”
                ―Diane Duane, So You Want to Be a Wizard</p> </Quote>
        </>
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
    padding-bottom: 1em;
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

const Quote = styled.div `
    margin-top: 1rem;
    padding: 1rem;
    background-color: #283618;
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    font-family: 'Libre Baskerville', serif;
    p{
        color: white;
    }
`