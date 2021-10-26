import BookList from './BookList';
import NavBar from './NavBar';
import Home from './Home';
import BookForm from './BookForm';
import BookDate from './BookDate';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
       <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      <Route exact path="/books">
        <BookList />
      </Route>
      <Route exact path="/form">
        <BookForm />
      </Route>
      <Route exact path="/date">
        <BookDate />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
