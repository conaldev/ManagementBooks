import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useQuery, useMutation } from '@apollo/client'
import { addSingleBook } from '../graphql-client/mutation'
import { getBooks, getAuthors } from '../graphql-client/queries'

const BookForm = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        authorId: ''
    })
    const { name, genre, authorId } = newBook


    const onInputChange = event => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value
        })
    }

    
    const addBookForm = event => {
        event.preventDefault()
        addBook({
            variables: { name, genre, authorId },
            refetchQueries: [{ query: getBooks }]
        })

        setNewBook({
            name: '',
            genre: '',
            authorId: ''
        })

    }	
    // GraphQL operations
	const { loading, error, data } = useQuery(getAuthors)

	const [addBook, dataMutation] = useMutation(addSingleBook)

    return (
        <Form onSubmit={addBookForm}>
        <Form.Group className='invisible'></Form.Group>
        <Form.Group>
            <Form.Control type='text' placeholder='Book name' name='name' onChange={onInputChange} value={name}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='text' placeholder='Book genre' name='genre' onChange={onInputChange} value={genre}></Form.Control>
        </Form.Group>
        <Form.Group>
            {loading ? (<p>Loading authors...</p>)
                : (<Form.Control as='select' name="authorId" onChange={onInputChange} value={authorId}>
                    <option disabled value=''>
                        Select author
                    </option>
                    {data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
                </Form.Control>)}
        </Form.Group>
        <Button className='float-right' variant='info' type='submit' >
            Add Book
        </Button>
    </Form>

    )
}

export default BookForm
