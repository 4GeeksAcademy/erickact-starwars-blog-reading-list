const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites: [],
			planets: [],
			vehicles: []
		},
		actions: {
			getCharacters: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people/")
					let data = await response.json()
					setStore({characters: data.results});

					return
				} catch (error) {
					console.log(error)
					return
				}		
			},
			getCharacterDetailsById: async (id) => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people/"+id)
					let data = await response.json()
					
					let characterDetails = data.result.properties

					const store = getStore();
					const idStr = String(id)
					
					const updatedCharacters = store.characters.map(character => {
						if (character.uid === idStr) {
                            return { ...character, properties: characterDetails };
                        } else {
                            return character;
                        }
					});
					
					setStore({characters : updatedCharacters});
					
				} catch (error) {
					console.log(error)
				}
			},
			addToFavorites: ({title, id}) => {
				const store = getStore();
				
				// const existingFavorite = store.favorites.find(fav=>fav.uid === character.uid)
				// if (!existingFavorite) {
				// 	setStore({ favorites: [...store.favorites, character] });
				// }
				
 				if (!store.favorites.some(fav => fav.id === id+title)) {
					setStore({favorites: [...store.favorites,{title, id:id+title}] });		
				}
			},
			removeFromFavorites: (id) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.id !== id) });
			},
			getPlanets: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets/")
					let data = await response.json()
					setStore({planets: data.results});

				} catch (error) {
					console.log(error);
				}
			},
			getPlanetDetailsById: async (id) => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets/"+id)
					let data = await response.json()
					
					let planetDetails = data.result.properties
					
					const store = getStore();
					const idStr = String(id)
					
					const updatedPlanets = store.planets.map(planet => {
						if (planet.uid === idStr) {
                            return { ...planet, properties: planetDetails };
                        } else {
                            return planet;
                        }
					});
					setStore({planets : updatedPlanets});
					
				} catch (error) {
					console.log(error)
				}
			},
			getVehicles: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles/")
					let data = await response.json()
					setStore({vehicles: data.results})
				
				} catch (error) {
					console.log(error);
					
				}
				
			},
			getVehicleDetailsById: async (id) => {
				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles/"+id)
					let data = await response.json()
					
					let vehiclesDetails = data.result.properties
					
					const store = getStore();
					const idStr = String(id)
					
					const updatedVehicles = store.vehicles.map(vehicle => {
						if (vehicle.uid === idStr) {
                            return { ...vehicle, properties: vehiclesDetails };
                        } else {
                            return vehicle;
                        }
					});
					setStore({vehicles : updatedVehicles});
					
				} catch (error) {
					console.log(error)
				}
			},
			
		}
	};
};

export default getState;
