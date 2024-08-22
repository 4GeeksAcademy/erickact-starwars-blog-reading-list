import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/Cards.jsx";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	},[])

return (
	<div className="container d-flex">
		
		{store.characters.map((character)=>{
			return (
				<Cards key={character.uid} character={character}/>
			)
		})}

		
		
	</div>
	)
}
