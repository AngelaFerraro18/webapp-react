function StarRating({ vote }) {

    const maxValue = 5;

    return (
        <>
            {[...Array(maxValue)].map((_, index) => index < vote ? (
                <i className="fa-solid fa-star"></i>) : (<i className="fa-regular fa-star"></i>))}
        </>
    );
}

export default StarRating;