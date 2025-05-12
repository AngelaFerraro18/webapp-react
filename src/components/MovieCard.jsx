import { Link } from "react-router-dom";

function MovieCard({ data }) {

    const { id, image, title, director, abstract } = data;

    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Director: <strong>{director}</strong></p>
            <p>Description: <em>{abstract}</em></p>
            <Link to={`/movies/${id}`}>More info...</Link>
        </li>
    )
}

export default MovieCard;