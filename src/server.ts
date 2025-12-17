import express, { Request, Response } from 'express'
import {
  addBook,
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
  if (req.query.category) {
    const cate = req.query.category as string
    getBooksByCategory(cate).then((books) => res.json(books))
  } else {
    getAllBooks().then((books) => res.json(books))
  }
})

app.post('/books', (req, res) => {
  const newBook = req.body
  addBook(newBook).then((book) => res.json(book))
})

app.get('/books/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  getBookById(id).then((book) => {
    if (book) {
      res.json(book)
    } else {
      res.status(404).send('Book not found')
    }
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
