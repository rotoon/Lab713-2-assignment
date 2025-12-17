import express, { Request, Response } from 'express'
import {
  getAllBooks,
  getBookById,
  getBooksByCategory,
} from './services/BookService'

const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/books', (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title as string
    const filteredBooks = getBooksByCategory(title)
    res.json(filteredBooks)
  } else {
    res.json(getAllBooks())
  }
})

app.post('/books', (req, res) => {
  try {
    const newBook = req.body
    if (newBook?.id) {
      const existingIndex = getAllBooks().findIndex(
        (book) => book.id === newBook.id
      )
      if (existingIndex !== -1) {
        getAllBooks()[existingIndex] = newBook
        res.json(newBook)
        return
      }
    }
    newBook.id = getAllBooks().length + 1
    getAllBooks().push(newBook)
    res.json(newBook)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error adding book')
  }
})

app.get('/books/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const book = getBookById(id)
  if (book) {
    res.json(book)
  } else {
    res.status(404).send('Book not found')
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
