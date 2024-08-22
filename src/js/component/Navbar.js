import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
						Favorites<span>{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((fav)=>{
							return (
							<li className="dropdown-item" key={fav.uid}>{fav.name}<button onClick={()=>actions.removeFromFavorites(fav.uid)}><i className="fa-solid fa-trash"></i></button></li>
						)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
