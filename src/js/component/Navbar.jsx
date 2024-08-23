import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starWars from "../../img/star-wars.png"

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	
	return (
		<nav className="navbar navbar-light container fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0"><img src={starWars} className="" alt="" style={{width:"70px", height:"38px"}} /></span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
						Favorites<span className="ms-2 rounded-circle bg-white p-1 fw-bold text-primary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((fav)=>{
							return (
							<li className="dropdown-item text-primary" key={fav.id}><small>{fav.title}</small><button className="float-end bg-transparent border border-0" onClick={()=>actions.removeFromFavorites(fav.id)}><i className="fa-solid fa-trash"></i></button></li>
						)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
