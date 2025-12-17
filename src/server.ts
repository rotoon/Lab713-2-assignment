import express, { Request, Response } from 'express'
import {
  addBook,
  getAllBooks,
  getBookById,
  getBooksByTitle,
} from './services/BookService'

const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/books', async (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title as string
    const filteredBooks = await getBooksByTitle(title)
    res.json(filteredBooks)
  } else {
    res.json(await getAllBooks())
  }
})

app.post('/books', async (req, res) => {
  try {
    const newBook = req.body
    const allBooks = await getAllBooks()
    if (newBook?.id) {
      const existingIndex = allBooks.findIndex((book) => book.id === newBook.id)
      if (existingIndex !== -1) {
        allBooks[existingIndex] = newBook
        res.json(allBooks[existingIndex])
      } else {
        res.status(404).send('Book not found')
      }
    } else {
      res.json(await addBook(newBook))
    }
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
