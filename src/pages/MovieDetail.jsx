import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";
import FormReview from "../components/FormReview";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

function MovieDetail() {
    const { id } = useParams();
    const url = 'http://127.0.0.1:3000';

    const [movie, setMovie] = useState({});
    const [review, setReview] = useState([]);
    const [show, setShow] = useState(false);
    const { setIsLoading } = useContext(GlobalContext);

    function getMovie() {

        setIsLoading(true);

        axios.get(`${url}/movies/${id}`)
            .then(res => {
                setMovie(res.data);
                setReview(res.data.reviews);
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }

    function isShow() {
        setShow(!show);
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

        <section>
            <button type="button" onClick={isShow} className="btn btn-primary mb-3">{show ? 'Close window' : 'Add your review!'}</button>
            {show && <div className="card mb-5">
                <div className="card-body">
                    <FormReview movieId={id} reloadReviews={getMovie} />
                </div>
            </div>}
        </section>
    </>
}

export default MovieDetail;