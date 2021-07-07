import {gql} from '@apollo/client'

const getBooks = gql`
    query getBooksQuery {
        books {
            name
            id
            genre
        }
    }
`
const getSingleBook = gql`
    query getSingleBookQuery($id: ID) {
        book(id: $id) {
            name
            id
            genre
            author {
                id 
                name
                age
                books {
                    id
                    name
                    genre
                }
            }
        }
    }
`

const getAuthors = gql`
    query getAuthors {
        authors {
            id
            name
            age
            books {
                name
                genre
                id
            }
        }
    }
`

    export {getBooks, getSingleBook, getAuthors}