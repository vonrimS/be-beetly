import React, { useState } from 'react';
import axios from 'axios';
const url = 'http://localhost:3001';

function UrlForm() {
    const [origin, setOrigin] = useState('');
    const [isValid, setIsValid] = useState(false);

    // check url input against given regex
    // if not pass test button will be disabled
    const handleChange = (e) => {
        const value = e.target.value;
        setOrigin(value);
        const regex = /^https?:\/\/.+$/;
        setIsValid(regex.test(value));
        console.log(regex.test(value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(url, { origin: origin, subpart: origin });
            console.log(resp.data);
            console.log('====' + document.cookie);
            setOrigin('');
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group input-group-lg">
                <input
                    type="text"
                    id="origin"
                    value={origin}
                    className="form-control"
                    placeholder="Shorten your link"
                    onChange={handleChange} />
                <button
                    className="btn btn-outline-primary"
                    type="submit"
                    disabled={!origin || !isValid}
                    id="button-addon2">Shorten</button>
            </div>
        </form>
    );
}

export default UrlForm;