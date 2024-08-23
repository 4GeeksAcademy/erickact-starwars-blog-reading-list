import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CardDescription } from "../component/CardDescription.jsx";

export const VehiclesFeatures = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

    useEffect(() => {
		actions.getVehicleDetailsById(id);
    }, [id]);

	const vehicle = store.vehicles.find(veh => veh.uid === id)
	
	return (
		<div className="d-flex justify-content-center">
			<CardDescription item={vehicle} propertiesToShow={["cargo_capacity", "consumables", "cost_in_credits", "crew", "length", "manufacturer", "max_atmosphering_speed", "model", "passengers"]} image={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle?.uid}.jpg`}/>
		</div>
	);
};

VehiclesFeatures.propTypes = {
	match: PropTypes.object
};
