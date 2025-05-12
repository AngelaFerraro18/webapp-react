import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<div>Lista dei film</div>} />
          <Route path="/movies/:id" element={<div>Dettaglio del film</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
