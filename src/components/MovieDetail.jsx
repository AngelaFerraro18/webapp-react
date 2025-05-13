import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
    const { id } = useParams();
    const url = 'http://127.0.0.1:3000';

    const [movie, setMovie] = useState({});

    function getMovie() {
        axios.get(`${url}/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.error(err))
    }

    useEffect(getMovie, [id]);

    return <>
        <img src={movie.image} alt={movie.title} />
        <div>
            <h2>{movie.title}</h2>
            <p>Director: <strong>{movie.director}</strong></p>
            <p>Description: <em>{movie.abstract}</em></p>
        </div>

        <h3>
            Our reviews:
        </h3>
        <div>
            <p>Vote: {movie.mean_votes}</p>
        </div>
    </>
}

export default MovieDetail;