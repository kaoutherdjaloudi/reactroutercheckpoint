// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';
import './App.css';

const movies = [
  {
    title: 'Big Hero 6',
    description: 'A young robotics prodigy forms a superhero team to combat a mysterious villain.',
    posterURL: 'https://lumiere-a.akamaihd.net/v1/images/p_bighero6_19753_20bd6206.jpeg',
    rating: 7.8,
    trailer: 'https://www.youtube.com/embed/8IdMPpKMdcc',
  },
  {
    title: 'Moana',
    description: 'A young girl sets sail across the ocean to save her island with the help of the demigod Maui.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg',
    rating: 7.6,
    trailer: 'https://www.youtube.com/embed/LKFuXETZUsI',
  },
  {
    title: 'Descendants',
    description: 'The teenage children of Disney’s most infamous villains are given a chance to redeem their parents.',
    posterURL: 'https://m.media-amazon.com/images/I/914R2YGTxfL._AC_UF894,1000_QL80_.jpg',
    rating: 6.7,
    trailer: 'https://www.youtube.com/embed/k8LFzFzNeUw',
  },
  {
    title: 'Zootopia',
    description: 'A bunny cop and a con artist fox team up to solve a mysterious case in a city of anthropomorphic animals.',
    posterURL: 'https://play-lh.googleusercontent.com/RKwnKXe8i53FA_O_bRPX9NDQYsetgo_G1K2Ks9fnBeIxRNYNEQD5CX4OOsQ5PLa8U_-QmCnMh0g8BOiMfA',
    rating: 8.0,
    trailer: 'https://www.youtube.com/embed/jWM0ct-OLsM',
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    description: 'Four siblings discover a magical world in the back of a wardrobe and help free it from the White Witch’s rule.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_QL75_UY281_CR0,0,190,281_.jpg',
    rating: 6.9,
    trailer: 'https://www.youtube.com/embed/pYcGFLgJ8Uo',
  },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
