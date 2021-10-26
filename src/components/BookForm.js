import { useState } from "react";
import { Form } from "semantic-ui-react"


function BookForm ({setBookList}) {

const [newBook, setNewBook] = useState({
    title:"",
    author: "",
    genre:"",
    cover:""
});

function handleChange(e) {
    setNewBook((currentBook) => ({
      ...currentBook, 
      [e.target.name] : e.target.value,
    }))
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
    .then((data) =>
        setNewBook((currentBook) => [...currentBook, data])
    );
}

return (
    <div>
      <h3>Add a Book!</h3>
      <Form
        onSubmit= {handleSubmit} 
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Title" 
          placeholder="Title" 
          name="Title" 
          onChange = {handleChange}/>
          <Form.Input 
          fluid label="Author"
          placeholder="author" 
          name="author" 
          onChange = {handleChange} />
          <Form.Input
            fluid label="genre"
            placeholder="genre"
            name="genre"
            onChange = {handleChange}/>
          <Form.Input
            fluid label="Image"
            placeholder="cover"
            name="cover"
            onChange = {handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default BookForm;