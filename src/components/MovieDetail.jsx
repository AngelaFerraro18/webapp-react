import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import StarRating from "./StarRating";

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
        <section className="d-flex mb-5 gap-4 align-items-end">
            <img src={movie.image} alt={movie.title} className="w-25 h-100 rounded" />
            <div>
                <h2 className="mb-3">{movie.title}</h2>
                <p>Director: <strong>{movie.director}</strong></p>
                <p>Description: <em>{movie.abstract}</em></p>
            </div>
        </section>

        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Our reviews:</h3>
                <p>Vote: <StarRating vote={Math.floor(Number(movie.mean_votes))} /></p>
            </div>

            {review.length ? review.map(rev => <ReviewCard data={rev} key={rev.id} />) : <p>Nessuna recensione</p>}
        </div>
    </>
}

export default MovieDetail;