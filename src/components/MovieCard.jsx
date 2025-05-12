import { Link } from "react-router-dom";

function MovieCard({ data }) {

    const { id, image, title, director, abstract } = data;

    return (
        <li className="card col-3 p-2 border-info-subtle border-3">
            <img className="card-img-top d-block rounded" src={image} alt={title} />
            <div class="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Director: <strong>{director}</strong></p>
                <p className="card-text">Description: <em>{abstract}</em></p>
                <Link to={`/movies/${id}`}>More info...</Link>
            </div>
        </li>
    )
}

export default MovieCard;