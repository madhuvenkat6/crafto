import React, { useState, useEffect } from 'react';
import { getQuotes } from '../api/api';
import './css/QuoteListPage.css';

function QuoteListPage({ token }) {
    const [quotes, setQuotes] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const data = await getQuotes(token, 20, offset);                
                if (data.length === 0) setHasMore(false);
                setQuotes(prev => [...prev, ...data]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchQuotes();
    }, [offset]);

    return (
        <div className="quote-list-container">
            <h2>Quotes</h2>
            {quotes.map(quote => (
                <div key={quote.id} className="quote-item">
                    <img src={quote.mediaUrl} alt="Quote" />
                    <div className="quote-content">
                        <p className="quote-text">{quote.text}</p>
                        <span className="quote-meta">{quote.username} - {quote.created_at}</span>
                    </div>
                </div>
            ))}
            {hasMore && (
                <button 
                    className="load-more-button" 
                    onClick={() => setOffset(offset + 20)}
                >
                    Load More
                </button>
            )}
        </div>
    );
}

export default QuoteListPage;
