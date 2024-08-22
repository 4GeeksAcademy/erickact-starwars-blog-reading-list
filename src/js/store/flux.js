const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites: []
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
					
					// Update store with character details
					const store = getStore();
					const idStr = String(id)
					
					const updatedCharacters = store.characters.map(character => {
						if (character.uid === idStr) {
                            return { ...character, ...characterDetails };
                        } else {
                            return character;
                        }
					});
					console.log(updatedCharacters);
					
					setStore({characters : updatedCharacters});
				} catch (error) {
					console.log(error)
				}
			},
			addToFavorites: (character) => {
				const store = getStore();
				// Verifica si el personaje ya está en los favoritos para evitar duplicados
				if (!store.favorites.some(fav => fav.uid === character.uid)) {
					setStore({ favorites: [...store.favorites, character] });
				}
			},
			removeFromFavorites: (uid) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response=> response.json())
				// .then(data=>console.log(data.results))
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(response=> response.json())
				// .then(data=>console.log(data.results))
			},
			
		}
	};
};

export default getState;
