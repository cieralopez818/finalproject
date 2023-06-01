import React from "react";
import { Button } from "react-bootstrap";
import { styled } from "@mui/material/";

const PREFIX = "DeleteBook";

const classes = {
  button: `${PREFIX}-button`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.button}`]: {
    margin: theme.spacing(2),
  },
}));

// filters out book object from books array by ID
const DeleteBook = ({ books, setBooks }) => {
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <Root>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => handleDelete(book.id)}
      >
        Delete
      </Button>
    </Root>
  );
};

export default DeleteBook;
