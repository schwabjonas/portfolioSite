import React, { useEffect, useState } from 'react';
import '../assets/styles/global.css';
import '../assets/styles/HomePage.css';

const Quote = () => {
    const [quote, setQuote] = useState('Loading quote...');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchQuote = () => {
        setLoading(true);
        setError(null);

        fetch('https://programming-quotesapi.vercel.app/api/random')
            .then((response) => {
                if (response.status === 429) {
                    setError('Too Many Requests. Please wait before retrying.');
                    setLoading(false);
                    return;
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }
                return response.json();
            })
            .then((data) => {
                const quoteText = data.quote || 'Quote text not available';
                const author = data.author || 'Unknown Author';

                setQuote(`"${quoteText}" - ${author}`);
                setLoading(false);
            })
            .catch(() => {
                setQuote('Unable to load quote.');
                setLoading(false);
                setError('Failed to fetch a new quote.');
            });
    };


    useEffect(() => {
        fetchQuote();
    }, []);


    return (
        <section id="quote">
            <h3>Inspirational Quote</h3>
            <p>{loading ? 'Loading...' : quote}</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
                onClick={fetchQuote}>
                Fetch New Quote
            </button>
        </section>
    );
};

export default Quote;
