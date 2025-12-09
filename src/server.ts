import express, { Request, Response } from 'express'

const app = express()
const port = 3000

interface Book {
  id: number
  title: string
  author_name: string
  desciption: string
  groups: string[]
}

const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author_name: 'F. Scott Fitzgerald',
    desciption:
      'A novel set in the Jazz Age that tells the story of Jay Gatsby.',
    groups: ['Classic', 'Fiction'],
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author_name: 'Harper Lee',
    desciption:
      'A novel about the serious issues of rape and racial inequality.',
    groups: ['Classic', 'Historical Fiction'],
  },
  {
    id: 3,
    title: '1984',
    author_name: 'George Orwell',
    desciption: 'A dystopian social science fiction novel.',
    groups: ['Dystopian', 'Science Fiction'],
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author_name: 'Jane Austen',
    desciption: 'A romantic novel of manners.',
    groups: ['Classic', 'Romance'],
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author_name: 'J.D. Salinger',
    desciption: 'A story about teenage angst and alienation.',
    groups: ['Classic', 'Young Adult'],
  },
  {
    id: 6,
    title: 'The Hobbit',
    author_name: 'J.R.R. Tolkien',
    desciption:
      'A fantasy novel regarding the quest of home-loving hobbit Bilbo Baggins.',
    groups: ['Fantasy', 'Adventure'],
  },
  {
    id: 7,
    title: 'Fahrenheit 451',
    author_name: 'Ray Bradbury',
    desciption:
      'A dystopian novel about a future American society where books are outlawed.',
    groups: ['Dystopian', 'Science Fiction'],
  },
  {
    id: 8,
    title: 'Moby-Dick',
    author_name: 'Herman Melville',
    desciption:
      'The narrative of the sailor Ishmael and the obsessive quest of Ahab.',
    groups: ['Classic', 'Adventure'],
  },
  {
    id: 9,
    title: 'War and Peace',
    author_name: 'Leo Tolstoy',
    desciption: 'A novel that chronicles the French invasion of Russia.',
    groups: ['Classic', 'Historical Fiction'],
  },
  {
    id: 10,
    title: 'The Odyssey',
    author_name: 'Homer',
    desciption:
      'One of two major ancient Greek epic poems attributed to Homer.',
    groups: ['Classic', 'Epic'],
  },
]

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/books', (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title as string
    const filteredBooks = books.filter((book) =>
      book?.title?.toLowerCase().startsWith(title)
    )
    res.json(filteredBooks)
  } else {
    res.json(books)
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
