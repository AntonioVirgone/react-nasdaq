import React, {useState} from 'react';

function FiglioWithStatus(props) {
    const [name, setName] = useState('Apple');

    return (
        <div>
            <h1>Hello, my name is Figlio with state!</h1>
            <h2>{name}</h2>
        </div>
    );
}

export default FiglioWithStatus;