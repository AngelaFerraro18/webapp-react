import axios from "axios";
import { useState } from "react";


function AddMovieCard() {

    const initialValues = {
        title: '',
        director: '',
        abstract: '',
        image: null
    }

    const [formData, setFormData] = useState(initialValues);

    function handleFormData(event) {

        let { name, value, files } = event.target;

        let currentValue = value;

        if (name === "image") {
            currentValue = files[0];
        } else {
            currentValue = value;
        }

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue
        }))
    }

    function submitCard(event) {
        event.preventDefault();

        console.log('ho inviato il form');

        const url = 'http://127.0.0.1:3000';

        axios.post(`${url}/movies`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data.message);
                setFormData(initialValues);
            })
            .catch(err => console.error(err))
    }


    return (<div className="card mb-5">
        <div className="card-body">

            <form onSubmit={submitCard}>
                <div className="mb-3">
                    <label htmlFor="title-id" className="form-label">Movie Title:</label>
                    <input type="text"
                        name='title'
                        value={formData.title}
                        onChange={handleFormData}
                        className="form-control"
                        id="title-id"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="director-id" className="form-label">Director:</label>
                    <input type="text"
                        name='director'
                        value={formData.director}
                        onChange={handleFormData}
                        className="form-control"
                        id="director-id" />
                </div>
                <div className="mb-3">
                    <label htmlFor="abstract-id" className="form-label">Description:</label>
                    <input type="text"
                        name="abstract"
                        value={formData.abstract}
                        onChange={handleFormData}
                        className="form-control"
                        id="abstract-id" />
                </div>

                <div className="input-group mb-3 ">
                    <input type="file"
                        name="image"
                        onChange={handleFormData}
                        className="form-control"
                        id="file-id" />
                </div>

                <button type="submit" className="btn btn-primary">Create a new movie-card!</button>
            </form>
        </div>
    </div>)
}

export default AddMovieCard;