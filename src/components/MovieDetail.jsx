import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
    const { id } = useParams();
    const url = 'http://127.0.0.1:3000';

    const [movie, setMovie] = useState({});
    const [review, setReview] = useState([]);

    function getMovie() {
        axios.get(`${url}/movies/${id}`)
            .then(res => {
                setMovie(res.data);
                console.log(res.data.reviews);
                setReview(res.data.reviews);
            })
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

        <div>
            <h3>Our reviews:</h3>
            <div>
                <p>Vote: {movie.mean_votes}</p>
            </div>

            {review.length ? review.map(rev =>
                <div key={rev.id} className="card mb-4">
                    <div className="card-body">
                        <h4>{rev.name}</h4>
                        <p>{rev.text}</p>
                        <p><em>Vote:</em> {rev.vote}</p>
                    </div>
                </div>) : <p>Nessuna recensione</p>}

        </div>
    </>
}

export default MovieDetail;