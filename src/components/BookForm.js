import { useState } from "react";
import { Form } from "semantic-ui-react";
import NewBookContainer from "./NewBookContainer";

const genreOptions = [
  {key: "fiction", value: "fiction", text: "fiction"},
  {key: "nonfiction", value: "nonfiction", text: "nonfiction"},
  {key: "childrens", value: "childrens", text: "childrens"}
]

function BookForm ({setBookList}) {
  // const [isLoaded, setIsLoaded] = useState(false)
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
    .then((data) =>
      setBookList((currentBook) => [data, ...currentBook]),
        // setIsLoaded(true)
    );
  }


  // if (!isLoaded) return <h3>Loading ...</h3>

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
            fluid 
            label="Genre"
            placeholder="genre"
            name="genre"
            options={genreOptions} 
            onChange={handleChange}
            />
          <Form.Input
            fluid label="Book Cover"
            placeholder="image"
            name="cover"
            onChange = {handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      <NewBookContainer newBook={newBook} handleSubmit={handleSubmit}/>
    </div>
  );
  }

export default BookForm;