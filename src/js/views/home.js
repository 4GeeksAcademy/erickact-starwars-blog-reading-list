import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/Cards.jsx";
import "../../styles/index.css";

export const Home = () => {
	const {store, actions} = useContext(Context)	

	useEffect(()=>{
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	},[])

return (
	
	<div className="container mb-5" style={{marginTop:"80px"}}>
		<div>
			<h2 className="text-primary mb-3">Characters</h2>
			<div className="scrolling-wrapper mb-5">
				{store.characters.map((character)=>{
					return (
						<Cards urlPrefix="/character/" key={character.uid} title={character.name} id={character.uid} image={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}/>
				)
				})}
			</div>
		</div>

		<div>
			<h2 className="text-primary mb-3">Planets</h2>
			<div className="scrolling-wrapper mb-5">
				{store.planets.map((planet)=>{
						return (
							<Cards urlPrefix="/planet/" key={planet.uid} title={planet.name} id={planet.uid} image={planet.uid === "1" ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}/>
						)
					})}
			</div>
		</div>
		
		<div>
			<h2 className="text-primary mb-3">Vehicles</h2>
			<div className="scrolling-wrapper">
				{store.vehicles.map((vehicle)=>{
						return (
							<Cards urlPrefix="/vehicle/" key={vehicle.uid} title={vehicle.name} id={vehicle.uid} image={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}/>
						)
					})}
			</div>
		</div>	
	</div>
	)
};
