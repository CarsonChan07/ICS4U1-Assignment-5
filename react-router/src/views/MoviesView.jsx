import { Link } from "react-router-dom"
import Header from "../components/Header"
import Genres from "../components/Genres"
import Footer from "../components/Footer"

function MoviesView() {
  
  return (
    <div>
      <Header />
      <Genres />
      <h1>Movies</h1>
      <Footer />
    </div>
  )
}

export default MoviesView