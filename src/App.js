import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ShowBooks from "./components/ShowBooks";
import AddBook from "./components/AddBook";
import Genre from "./components/Genre";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Set up state to manage the list of books
  const [books, setBooks] = useState([]);

  return (
    // Set up the router
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ShowBooks />} />
            <Route path="/books/*" element={<ShowBooks />} />
            <Route
              path="/fav/*"
              element={<AddBook books={books} setBooks={setBooks} />}
            />
            <Route path="/genres/:genre" element={<Genre />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
