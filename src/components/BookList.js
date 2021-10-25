import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import BookContainer from "./BookContainer";
import BookDate from "./BookDate";
import Header from "./Header";
import Form from "./Form";
import BookCards from "./BookCards";


function BookList () {

const [bookList, setBookList] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then(setBookList)
}, [])



    return (
    <div>
        <Header />
        <Form />
        <BookContainer books = {bookList}/>
        <BookDate />
    </div>
    )
}

export default BookList;