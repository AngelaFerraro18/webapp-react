import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

function MoviesList() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const { setIsLoading } = useContext(GlobalContext);

    const url = 'http://127.0.0.1:3000';

    function getMovies() {

        setIsLoading(true);

        axios.get(`${url}/movies`, {
            params: { search }
        })
            .then(res => {
                setMovies(res.data);
                // setIsLoading(false);
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }

    function searchMovies(event) {
        event.preventDefault();

        getMovies();
    }

    useEffect(getMovies, [search]);

    return (<>
        <h2 className="mb-2">Lista dei film:</h2>
        <div className="d-flex justify-content-between align-items-center">
            <form onSubmit={searchMovies} className="mb-5 col-3">
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Cerca..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">Cerca</button>
                </div>
            </form>
            <Link to={'/movies/new-movie-card'} className="btn btn-primary mb-5">Add a new movie!</Link>
        </div>


        <ul className="d-flex gap-3 row justify-content-center mb-5">
            {movies.length ? movies.map(movie => <MovieCard key={movie.id} data={movie} />) : <div>Il film non è presente!</div>}
        </ul>
    </>
    )
}

export default MoviesList;