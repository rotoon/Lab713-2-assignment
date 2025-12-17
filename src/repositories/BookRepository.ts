import Book from '../models/Book'

const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author_name: 'F. Scott Fitzgerald',
    description:
      'A novel set in the Jazz Age that tells the story of Jay Gatsby.',
    groups: ['Classic', 'Fiction'],
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author_name: 'Harper Lee',
    description:
      'A novel about the serious issues of rape and racial inequality.',
    groups: ['Classic', 'Historical Fiction'],
  },
  {
    id: 3,
    title: '1984',
    author_name: 'George Orwell',
    description: 'A dystopian social science fiction novel.',
    groups: ['Dystopian', 'Science Fiction'],
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author_name: 'Jane Austen',
    description: 'A romantic novel of manners.',
    groups: ['Classic', 'Romance'],
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author_name: 'J.D. Salinger',
    description: 'A story about teenage angst and alienation.',
    groups: ['Classic', 'Young Adult'],
  },
  {
    id: 6,
    title: 'The Hobbit',
    author_name: 'J.R.R. Tolkien',
    description:
      'A fantasy novel regarding the quest of home-loving hobbit Bilbo Baggins.',
    groups: ['Fantasy', 'Adventure'],
  },
  {
    id: 7,
    title: 'Fahrenheit 451',
    author_name: 'Ray Bradbury',
    description:
      'A dystopian novel about a future American society where books are outlawed.',
    groups: ['Dystopian', 'Science Fiction'],
  },
  {
    id: 8,
    title: 'Moby-Dick',
    author_name: 'Herman Melville',
    description:
      'The narrative of the sailor Ishmael and the obsessive quest of Ahab.',
    groups: ['Classic', 'Adventure'],
  },
  {
    id: 9,
    title: 'War and Peace',
    author_name: 'Leo Tolstoy',
    description: 'A novel that chronicles the French invasion of Russia.',
    groups: ['Classic', 'Historical Fiction'],
  },
  {
    id: 10,
    title: 'The Odyssey',
    author_name: 'Homer',
    description:
      'One of two major ancient Greek epic poems attributed to Homer.',
    groups: ['Classic', 'Epic'],
  },
]

export async function getBooksByTitle(title: string): Promise<Book[]> {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().startsWith(title.toLowerCase())
  )
  return filteredBooks
}

export async function getAllBooks(): Promise<Book[]> {
  return books
}

export async function getBookById(id: number): Promise<Book | undefined> {
  return books.find((book) => book.id === id)
}

export async function addBook(newBook: Book): Promise<Book> {
  newBook.id = books.length + 1
  books.push(newBook)
  return newBook
}

export async function updateBook(book: Book): Promise<Book> {
  const index = books.findIndex((b) => b.id === book.id)
  if (index === -1) {
    throw new Error('Book not found')
  }
  books[index] = book
  return book
}
