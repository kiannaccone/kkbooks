import { Form } from "semantic-ui-react";
import styled from 'styled-components';

function Genre ({search, setSearch, value}) {

  function handleChange (e) {
      setSearch(e.target.innerText)
  }

  return (
    <FormGenre>
    <Form>
      <Form.Group widths='equal'>
      </Form.Group>
      <Form.Group inline>
        <label>Genre: </label>
        <Form.Radio
          label='fiction'
          value='fiction'
          checked={search === 'fiction'}
          onChange={handleChange}
        />
        <Form.Radio
          label='nonfiction'
          value='nonfiction'
          checked={search === 'nonfiction'}
          onChange={handleChange}
        />
        <Form.Radio
          label='childrens'
          value='childrens'
          checked={search === 'childrens'}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
    </FormGenre>
  )
}

export default Genre;

const FormGenre = styled.div `
padding-right: 5%;
display: flex;
flex-wrap: wrap;
justify-content: right;
`