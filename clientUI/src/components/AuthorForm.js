import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useMutation } from '@apollo/client'
import { getAuthors } from '../graphql-client/queries'
import { addSingleAuthor } from '../graphql-client/mutation'
const AuthorForm = () => {
    const [newAuthor, setNewAuthor] = useState({
        name: '',
        age: ''
    })
    const { name, age } = newAuthor


    const onInputChange = (event) => {
        setNewAuthor({
            ...newAuthor,
            [event.target.name]: event.target.value
        })
    }

    
    const addAuthorForm = (event) => {
        event.preventDefault()
        addBook({
            variables: { name, age: parseInt(age) },
            refetchQueries: [{ query: getAuthors }]
        })

        setNewAuthor({
            name: '',
            age: ''
        })

    }	
    // GraphQL operations
	const [addBook, dataMutation] = useMutation(addSingleAuthor)

    return (
        <Form onSubmit={addAuthorForm}>
        <Form.Group>
            <Form.Control type='text' name='name' onChange={onInputChange} placeholder='Author name'></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='number' name='age' onChange={onInputChange} placeholder='Author age'></Form.Control>
        </Form.Group>
        <Button className='float-right' variant='info' type='submit'>
            Add Author
        </Button>
    </Form>
    )
}

export default AuthorForm
