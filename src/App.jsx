import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesList from "./components/MoviesList"
import DefaultLayout from "./layouts/DefaultLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/movies/:id" element={<div>Dettaglio del film</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
