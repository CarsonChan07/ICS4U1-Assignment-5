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
        <Route path="/" element={<LoginView />} />
        <Route path="/" element={<RegisterView />} />
        <Route path="/" element={<MoviesView />} />
        <Route path="/" element={<GenreView />} />
        <Route path="/" element={<DetailView />} />
        <Route path="/" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
