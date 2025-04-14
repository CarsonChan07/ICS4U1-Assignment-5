import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeView from "./views/HomeView"
import LoginView from "./views/LoginView"
import RegisterView from "./views/RegisterView"
import MoviesView from "./views/MoviesView"
import GenreView from "./views/GenreView"
import DetailView from "./views/DetailView"
import ErrorView from "./views/ErrorView"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/genre" element={<GenreView />} />
        <Route path="/movies/details" element={<DetailView />} />
        <Route path="/error" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
