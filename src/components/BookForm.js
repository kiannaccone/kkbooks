import { useState } from "react";
import { Form } from "semantic-ui-react";

function BookForm ({setBookList}) {
  const [isLoaded, setIsLoaded] = useState(false)
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
        setNewBook((currentBook) => [...currentBook, data]),
        setIsLoaded(true)
    );
  }

  if (!isLoaded) return <h3>Loading ...</h3>

  const genreOptions = [
    {value: 'fiction', text: 'fiction'},
    {value: 'nonfiction', text: 'nonfiction'},
    {value: 'childrens', text: 'childrens'}
  ]


  return (
    <div>
      <h3>Add a Book!</h3>
      <Form
        onSubmit= {handleSubmit} 
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Title" 
          placeholder="title" 
          name="title" 
          onChange = {handleChange}/>
          <Form.Input 
          fluid label="Author"
          placeholder="author" 
          name="author" 
          onChange = {handleChange} />
          <Form.Select
            fluid label="Genre"
            placeholder="genre"
            name="genre"
            options={genreOptions}
            onChange = {handleChange}/>
          <Form.Input
            fluid label="Book Cover"
            placeholder="image"
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