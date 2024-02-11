import React from "react";
import PropTypes from 'prop-types';

function FiglioStock(props) {
    const name = props.name;
    const age = props.age;

    return (
        <React.Fragment>
            <td>
                <h3>I'm Figlio {name}</h3>
                <p>Figlio is {age} years old</p>
            </td>
        </React.Fragment>
    );
}

export default FiglioStock;

FiglioStock.defaultProps = {
    name: 'ND',
    age: 'ND'
}

FiglioStock.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
}