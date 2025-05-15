import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesList from "./pages/MoviesList"
import DefaultLayout from "./layouts/DefaultLayout"
import MovieDetail from "./pages/MovieDetail"
import AddMovieCard from "./pages/AddMovieCard"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/movies/new-movie-card" element={<AddMovieCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
