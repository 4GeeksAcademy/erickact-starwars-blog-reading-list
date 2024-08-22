import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardDescription } from "../component/CardDescription.jsx";

export const CardDetails = () => {
	const { store, actions } = useContext(Context);

	// const params = useParams();
	const { id } = useParams();

	// useEffect(()=>{
	// 	actions.getCharacterDetailsById(params.id);
	// }, [params.id])
    useEffect(() => {
		actions.getCharacterDetailsById(id);
    }, [id]);

	const character = store.characters.find(char => char.uid === id);
	console.log(character);
	
	return (
		<div className="jumbotron">
			<CardDescription character={character}/>
		</div>
	);
};

CardDetails.propTypes = {
	match: PropTypes.object
};
