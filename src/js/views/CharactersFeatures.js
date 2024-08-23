import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CardDescription } from "../component/CardDescription.jsx";

export const CharactersFeatures = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

    useEffect(() => {
		actions.getCharacterDetailsById(id);
    }, [id]);

	const character = store.characters.find(char => char.uid === id);
	
	return (
		<div className="d-flex justify-content-center">
			<CardDescription item={character} propertiesToShow={["birth_year", "eye_color", "gender", "hair_color", "height", "mass", "name", "skin_color"]} image={`https://starwars-visualguide.com/assets/img/characters/${character?.uid}.jpg`}/>
		</div>
	);
};

CharactersFeatures.propTypes = {
	match: PropTypes.object
};
