import React from "react";
import { Button } from "react-bootstrap";
import {
  Grid,
  Paper,  Dialog, DialogTitle, DialogContent, DialogActions,} from "@mui/material/";

import { styled ,Typography} from "@mui/material/";

// ShowBooks class prefixes for Material UI styles
const PREFIX = "ShowBooks";
const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
  poster: `${PREFIX}-poster`,
  info: `${PREFIX}-info`,
};
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    margin: theme.spacing(4),
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  [`& .${classes.poster}`]: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(1),
  },
  [`& .${classes.info}`]: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));

// Favorites Component
const Fav = ({ books, setBooks }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // filter out matching id from book array
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  
  return (
    <Root className={classes.root}>
      <Grid container spacing={4}>
        {books.map((book, index) => (
          <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <img
                src={book.poster}
                alt={`${book.title} Poster`}
                className={classes.poster}
              />
              <div className={classes.info}>
                <Typography variant="subtitle1">{book.title}</Typography>
                <Typography variant="subtitle1">{book.year}</Typography>
              </div>
              <div className={classes.info}>
                <Typography variant="body2">{book.genre}</Typography>
                <Typography variant="body2">{`$${book.author.toLocaleString()}M`}</Typography>
              </div>
            </Paper>
            <Button
              size="small"
              color="secondary"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </Button>
            <Button size="small" color="primary" onClick={handleOpen}>
              Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit Book</DialogTitle>
              <DialogContent></DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Save</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Fav;
