import React from "react";

import { Grid, Paper, Typography, styled } from "@mui/material/";
import books from "./Books";

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

// Display all books in book array using Material UI styles
const ShowBooks = () => {
  return (
    <Root className={classes.root}>
      <Grid container spacing={4}>
        {books.map((book) => (
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
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default ShowBooks;
