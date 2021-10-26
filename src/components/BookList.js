import {useState, useEffect} from 'react'
import BookContainer from "./BookContainer";
import BookDate from "./BookDate";
import BookForm from "./BookForm";



function BookList () {
const [bookList, setBookList] = useState([]);
const [search, setSearch] = useState("")

useEffect(() => {
    fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then(setBookList)
}, [])


const filterBooks = bookList.filter(books => {
    return(
        books.title.toLowerCase().includes(search.toLowerCase())
        ||
        books.author.toLowerCase().includes(search.toLowerCase())
        ||
        books.genre.toLowerCase().includes(search.toLowerCase())
    )
})




    return (
    <div>
        <BookForm setBookList={setBookList}/>
        <BookContainer books = {filterBooks} search={search} setSearch={setSearch}/>
        <BookDate />
    </div>
    )
}

export default BookList;