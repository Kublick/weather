import React from "react";
import Proptypes from "prop-types";

const Error = ({ mensaje }) => {
	return <p className='red darken-4 error'>{mensaje}</p>;
};

Error.propTypes = {
	mensaje: Proptypes.string.isRequired,
};

export default Error;
