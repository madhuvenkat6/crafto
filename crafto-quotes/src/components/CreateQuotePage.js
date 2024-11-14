import React, { useState } from 'react';
import { uploadMedia, createQuote } from '../api/api';
import './css/CreateQuotePage.css';

function CreateQuotePage({ token }) {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    const handleQuoteCreation = async () => {
        try {
            const mediaData = await uploadMedia(file);
            const mediaUrl = mediaData.mediaUrl;
            await createQuote(token, text, mediaUrl);
            alert('Quote created successfully');
        } catch (error) {
            alert('Failed to create quote');
        }
    };

    return (
        <div className='main-quote-container'>
        <div className="create-quote-container">
            <h2>Create Quote</h2>
            <textarea
                className="create-quote-textarea"
                placeholder="Enter quote text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="file"
                className="create-quote-file-input"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="create-quote-button" onClick={handleQuoteCreation}>
                Create Quote
            </button>
        </div>
        </div>
    );
}

export default CreateQuotePage;
