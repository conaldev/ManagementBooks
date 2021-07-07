import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BookForm from './BookForm'
import AuthorForm from './AuthorForm'

import { useQuery, useMutation } from '@apollo/client'
import { getBooks } from '../graphql-client/queries'


const Forms = () => {
    return (
        <Row>
            <Col>
                <BookForm />
            </Col>
            <Col>
                <AuthorForm />
            </Col>
        </Row>
    )
}

export default Forms
