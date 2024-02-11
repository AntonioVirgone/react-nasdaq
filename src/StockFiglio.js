// Componente Hook
import React, {useState} from 'react';

function StockFiglio(props) {
    const [price, setPrice] = useState(120);
    const [hour, setHour] = useState('16:00');

    const p = price;

    setPrice(120.3);

    return (
        <div>
            <p>Price: {p}</p>
            <p>Hour: {hour}</p>
        </div>
    );
}

export default StockFiglio;