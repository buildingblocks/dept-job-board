import React from "react";
import PropTypes from 'prop-types';

const SomeText = (props) => {
    return (
        <p>{props.tagline}</p>
    )
}

SomeText.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default SomeText;