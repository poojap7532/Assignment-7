import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'
import axios from 'axios'

const FavBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {

      axios.get("http://localhost:8000/v1/book/get").then((res) => {
        console.log(res.data);
        setBooks(res.data)
      }
      )
    }, [])


  return (
    <div>
        <BookCard books={books} headline="Best Seller Books" />
    </div>
  )
}

export default FavBooks