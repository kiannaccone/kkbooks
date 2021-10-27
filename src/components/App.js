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
        <BookDate />
      </Route>
      </Switch>
    </div>
  );
}

export default App;


// “No. I can survive well enough on my own — if given the proper reading material.”
// ―Sarah J. Maas, Throne of Glass

// “Reading one book is like eating one potato chip.”
// ―Diane Duane, So You Want to Be a Wizard

// “A well-read woman is a dangerous creature.”
// ―Lisa Kleypas, A Wallflower Christmas

// “The problem with books is that they end.”
// ―Caroline Kepnes, You

// “The ability to read awoke inside of me some long dormant craving to be mentally alive.”
// ―Malcolm X, The Autobiography of Malcolm X

// “I love the sound of the pages flicking against my fingers. Print against fingerprints. Books make people quiet, yet they are so loud.”
// ―Nnedi Okorafor