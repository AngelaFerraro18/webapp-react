import { Link } from "react-router-dom";

function MovieCard({ data }) {

    const { image, title, director, abstract, slug } = data;

    return (
        <li className="card col-3 p-2 border-info-subtle border-3">
            <img className="card-img-top d-block rounded h-100" src={image} alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Director: <strong>{director}</strong></p>
                <p className="card-text">Description: <em>{abstract}</em></p>
                <Link to={`/movies/${slug}`}>More info...</Link>
            </div>
        </li>
    )
}

export default MovieCard;