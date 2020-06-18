import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

function Formulario({ busqueda, guardarBusqueda, guardarConsultar }) {
	const [error, guardarError] = useState(false);

	//destructuring
	const { ciudad, pais } = busqueda;

	// funcion que coloca los elementos

	const handleChange = (e) => {
		// actuzalizar el state

		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//validar
		if (ciudad.trim() === "" || pais.trim() === "") {
			guardarError(true);
			return;
		}

		guardarError(false);
		guardarConsultar(true);

		// pasarlo al component
	};

	return (
		<form onSubmit={handleSubmit}>
			{error ? <Error mensaje='ambos campos son obligarios' /> : null}
			<div className='input-field col s12'>
				<input
					text='text'
					name='ciudad'
					id='ciudad'
					value={ciudad}
					onChange={handleChange}
				/>
				<label htmlFor='ciudad' className='active'>
					Ciudad
				</label>
			</div>
			<div className='input-field col s12'>
				<select name='pais' id='pais' value={pais} onChange={handleChange}>
					<option value=''>--Selecione un Pais--</option>
					<option value='US'>Estados Unidos</option>
					<option value='MX'>México</option>
					<option value='AR'>Argentina</option>
					<option value='CO'>Colombia</option>
					<option value='CR'>Costa Rica</option>
					<option value='ES'>España</option>
					<option value='PE'>Perú</option>
				</select>
				<label htmlFor='pais'>Pais</label>
			</div>
			<div className='input-field col s12'>
				<input
					type='submit'
					value='Buscar Clima'
					className='waves-effect waves-light btn-large btn-block yellow accent-4'
				/>
			</div>
		</form>
	);
}

Formulario.propTypes = {
	busqueda: PropTypes.object.isRequired,
	guardarConsultar: PropTypes.func.isRequired,
	guardarBusqueda: PropTypes.func.isRequired,
};

export default Formulario;
