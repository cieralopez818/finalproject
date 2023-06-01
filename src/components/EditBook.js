import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "react-bootstrap";

const EditBooks = ({ open, handleClose, book, setBooks }) => {
  const [title, setTitle] = useState(book.title);
  const [year, setYear] = useState(book.year);
  const [genre, setGenre] = useState(book.genre);
  const [author, setAuthor] = useState(book.author);

  const handleSave = () => {
    const updatedBook = {
      ...book,
      title,
      year,
      genre,
      author,
    };
    const updatedBooks = [...book.filter((m) => m.id !== book.id), updatedBook];
    setBooks(updatedBooks);
    handleClose();
  };

  return (
    /* Edit books form does not display */
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Book</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBooks;
