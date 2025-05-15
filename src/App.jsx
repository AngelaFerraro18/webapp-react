import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesList from "./pages/MoviesList"
import DefaultLayout from "./layouts/DefaultLayout"
import MovieDetail from "./pages/MovieDetail"
import AddMovieCard from "./pages/AddMovieCard"
import GlobalContext from "./contexts/globalContext"
import { useState } from "react"


function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{
        isLoading,
        setIsLoading
      }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<MoviesList />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
              <Route path="/movies/new-movie-card" element={<AddMovieCard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
