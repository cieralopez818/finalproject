import books from "./Books";

const GenrePg = ({ genre }) => {
  const filteredBooks = books.filter((book) => book.genre === genre);

  return (
    <div>
      {/* Display selected Genre */}
      <h1>{genre} books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenrePg;
