import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function MoviesList() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const url = 'http://127.0.0.1:3000';

    function getMovies() {
        axios.get(`${url}/movies`, {
            params: { search }
        })
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => console.log(err))
    }

    function searchMovies(event) {
        event.preventDefault();

        getMovies();
    }

    useEffect(getMovies, [search]);

    return (<>
        <h2>Lista dei film:</h2>
        <form onSubmit={searchMovies}>
            <input
                type="text"
                placeholder="Cerca..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">Cerca</button>
        </form>

        <ul>
            {movies.length ? movies.map(movie => <MovieCard key={movie.id} data={movie} />) : <div>Il film non è presente!</div>}
        </ul>
    </>
    )
}

export default MoviesList;