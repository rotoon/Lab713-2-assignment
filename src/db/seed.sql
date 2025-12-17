-- Insert the 6 provided data entries
INSERT INTO books (title, author_name, description, groups) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'A novel set in the Jazz Age that tells the story of Jay Gatsby.', ARRAY['Classic', 'Fiction']),
('To Kill a Mockingbird', 'Harper Lee', 'A novel about the serious issues of rape and racial inequality.', ARRAY['Classic', 'Historical Fiction']),
('1984', 'George Orwell', 'A dystopian social science fiction novel.', ARRAY['Dystopian', 'Science Fiction']),
('Pride and Prejudice', 'Jane Austen', 'A romantic novel of manners.', ARRAY['Classic', 'Romance']),
('The Catcher in the Rye', 'J.D. Salinger', 'A story about teenage angst and alienation.', ARRAY['Classic', 'Young Adult']),
('The Hobbit', 'J.R.R. Tolkien', 'A fantasy novel regarding the quest of home-loving hobbit Bilbo Baggins.', ARRAY['Fantasy', 'Adventure']);