import axios from "axios";
import { useState } from "react";

function FormReview({ movieId, reloadReviews }) {

    const initialValues = {
        name: '',
        text: '',
        vote: 1
    }

    const [formData, setFormData] = useState(initialValues);

    function handleFormData(event) {
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    function submitReview(event) {
        event.preventDefault();
        console.log('ho inviato il form');
        const url = 'http://127.0.0.1:3000';

        axios.post(`${url}/movies/${movieId}/reviews`, formData)
            .then(res => {
                console.log(res.data.message);
                reloadReviews();
                setFormData(initialValues);
            })
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={submitReview}>
            <div className="mb-3">
                <label htmlFor="name-id" className="form-label">Your name:</label>
                <input type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleFormData}
                    className="form-control"
                    id="name-id" />
            </div>
            <div className="mb-3">
                <label htmlFor="text-id" className="form-label">Your review:</label>
                <input type="text"
                    name='text'
                    value={formData.text}
                    onChange={handleFormData}
                    className="form-control"
                    id="text-id" />
            </div>
            <div className="mb-3">
                <label htmlFor="vote-id" className="form-label">Vote:</label>
                <input type="number"
                    name="vote"
                    value={formData.vote}
                    onChange={handleFormData}
                    min='1'
                    max='5'
                    className="form-control"
                    id="vote-id" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>)
}

export default FormReview;