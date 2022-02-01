import BookList from './BookList';
import NavBar from './NavBar';
import Home from './Home';
import BookForm from './BookForm';
import BookDate from './BookDate';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react'


function App() {
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
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      <Route exact path="/books">
        <BookList search={search} setSearch={setSearch} booksList={filterBooks}/>
      </Route>
      <Route exact path="/form">
        <BookForm setBookList={setBookList}/>
      </Route>
      <Route exact path="/date">
        <BookDate books= {bookList}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;