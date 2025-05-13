function StarRating({ vote }) {

    const maxValue = 5;

    return (
        <>
            {[...Array(maxValue)].map((_, index) => <i key={index} className={`fa-star fa-${index < vote ? 'solid' : 'regular'}`}></i>)}
        </>
    );
}

export default StarRating;