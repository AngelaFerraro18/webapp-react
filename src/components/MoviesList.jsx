import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function MoviesList() {

    const [movies, setMovies] = useState([]);

    const url = 'http://127.0.0.1:3000';

    function getMovies() {
        axios.get(`${url}/movies`)
            .then(res => {
                // console.log(res.data);
                setMovies(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(getMovies, []);

    return (<>
        <h2>Lista dei film:</h2>
        <ul>
            {movies.length ? movies.map(movie => <MovieCard key={movie.id} data={movie} />) : <div>Il film non è presente!</div>}
        </ul>
    </>
    )
}

export default MoviesList;