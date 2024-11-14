import React, { useState } from 'react';
import { uploadMedia, createQuote } from '../api/api';

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
        <div>
            <h2>Create Quote</h2>
            <textarea
                placeholder="Enter quote text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={handleQuoteCreation}>Create Quote</button>
        </div>
    );
}

export default CreateQuotePage;
