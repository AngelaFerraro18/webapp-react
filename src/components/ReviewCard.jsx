import StarRating from "./StarRating";

function ReviewCard({ data }) {

    const { name, text, vote } = data;

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4>{name}</h4>
                <p>{text}</p>
                <p><em>Vote:</em> <StarRating vote={vote} /></p>
            </div>
        </div>
    )
}

export default ReviewCard;