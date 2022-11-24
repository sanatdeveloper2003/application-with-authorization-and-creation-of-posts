import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { Login } from './pages/login';
import { Main } from './pages/main/main';
import {Navbar} from './components/Navbar'
import './app.css'
import { CreatePost } from './pages/create-post/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
