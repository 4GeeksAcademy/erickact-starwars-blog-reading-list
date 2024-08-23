import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CardDescription } from "../component/CardDescription.jsx";

export const PlanetsFeatures = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

    useEffect(() => {
		actions.getPlanetDetailsById(id);
    }, [id]);

	const planet = store.planets.find(plan => plan.uid === id)
	
	return (
		<div className="d-flex justify-content-center rounded" style={{marginTop:"60px"}}>
			<CardDescription item={planet} propertiesToShow={["climate", "diameter", "gravity","orbital_period","population","rotation_period", "surface_water", "terrain"]} image={planet?.uid === '1' 
                        ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
                        : `https://starwars-visualguide.com/assets/img/planets/${planet?.uid}.jpg`}/>
			
		</div>
	);
};

PlanetsFeatures.propTypes = {
	match: PropTypes.object
};
