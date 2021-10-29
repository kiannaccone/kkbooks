import { useState } from "react";
import { Form } from "semantic-ui-react";
import NewBookContainer from "./NewBookContainer";
import styled from 'styled-components';

function BookForm ({setBookList}) {
  const [bookAdd, setBookAdd] = useState([])
  const [newBook, setNewBook] = useState({
      title:"",
      author: "",
      genre: "",
      cover:""
  });

  function handleChange(e) {
    setNewBook((currentNewBook) => ({
      ...currentNewBook, 
      [e.target.name] : e.target.value,
    }))
    console.log(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const book = {
      title: newBook.title,
      author: newBook.author,
      genre: newBook.genre,
      cover: newBook.cover
    }

  fetch ("http://localhost:3000/books", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }, 
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((data) => {
      setBookList((currentBook) => [data, ...currentBook])
      setNewBook({
        title:"",
        author: "",
        genre: "",
        cover:""
    })
    setBookAdd((data))
    });
  }

  return (
    <FormBook>
      <Form
        onSubmit= {handleSubmit} 
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid 
          label="Title" 
          placeholder="title" 
          name="title" 
          value={newBook.title}
          onChange = {handleChange}/>
          <Form.Input 
          fluid 
          label="Author"
          placeholder="author" 
          name="author" 
          value={newBook.author}
          onChange = {handleChange} />
          <Form.Field onChange={handleChange}
            control = "select"
            fluid 
            label="Genre"
            placeholder="genre"
            name="genre"
            >
            <option value=''>genre</option>
            <option value='fiction'>fiction</option>
            <option value='nonfiction'>nonfiction</option>
            <option value='childrens'>childrens</option>
            </Form.Field>
          <Form.Input
            fluid 
            label="Book Cover"
            placeholder="image"
            name="cover"
            value={newBook.cover}
            onChange = {handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      <h3>Please add your favorite book!</h3>
      <NewBookContainer bookAdd={bookAdd} />
    </FormBook>
  );
}

export default BookForm;

const FormBook = styled.div`
font-family: 'Libre Baskerville', serif;
form {
  padding:3%;
}
h3 {
  font-size: 30px;
  color: black;
  text-align: center;
  font-family: 'Libre Baskerville', serif;
}
`