import React, { useEffect, useState } from 'react';
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
                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }
                return response.json();
            })
            .then((data) => {
                setQuote(`"${data.en}" - ${data.author}`);
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
