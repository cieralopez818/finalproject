import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import { TextField, Button, MenuItem } from "@mui/material/";
import books from "./Books";
import Fav from "./Fav";

// AddBookForm prefixes for Material UI styles
const PREFIX = "AddBookForm";

const classes = {
  root: `${PREFIX}-root`,
  label: `${PREFIX}-label`,
  input: `${PREFIX}-input`,
  button: `${PREFIX}-button`,
};

const Root = styled("form")(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  [`& .${classes.label}`]: {
    fontWeight: "bold",
  },
  [`& .${classes.input}`]: {
    width: "100%",
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(2),
  },
}));

const FormContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.form}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  [`& .${classes.input}`]: {
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(2),
  },
}));

// createAllGenres array from all genres in the book array, remove duplicate genres
const allGenres = Array.from(new Set(books.map((book) => book.genre)));

//initial empty book
const AddBook = ({ books, setBooks }) => {
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    genre: "",
    year: "",
    description: "",
    author: "",
    poster: "",
  });

  // create a new book object
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // increment ID and add entered values to array
  const handleSubmit = (event) => {
    event.preventDefault();
    const maxId = books.reduce((acc, cur) => {
      return cur.id > acc ? cur.id : acc;
    }, 0);
    console.log("Form submitted:", newBook);
    const updatedBook = { ...newBook, id: maxId + 1 };
    const updatedBooks = [...books, updatedBook];
    setBooks(updatedBooks);
    setNewBook({
      id: "",
      title: "",
      year: "",
      genre: "",
      author: "",
      poster: "",
    });
    console.log(updatedBooks);
  };

  return (
    <div>
      <FormContainer
        maxWidth="sm"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}
      >
        <Root className={classes.root} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="Title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.input}
            label="Year"
            name="year"
            value={newBook.year}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.input}
            label="Genre"
            name="genre"
            select
            value={newBook.genre}
            onChange={handleInputChange}
          >
            {allGenres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.input}
            label="Author"
            name="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.input}
            label="Poster url"
            name="poster"
            value={newBook.poster}
            onChange={handleInputChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Book
          </Button>
        </Root>
      </FormContainer>
      <Fav books={books} setBooks={setBooks} />{" "}
      {/* Add books to the list of favorites*/}
    </div>
  );
};

export default AddBook;
