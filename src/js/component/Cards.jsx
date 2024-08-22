import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const Cards = ({character}) => {
  const { actions, store } = useContext(Context);

  return (
    <>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://placehold.co/400x200" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text"></p>
                <div className='d-flex justify-content-between'>
                    <Link to={"/card/" + character.uid} className="btn btn-outline-info">Learn More!</Link>
                    <button className='btn btn-outline-warning' onClick={()=>actions.addToFavorites(character)}><i className="fa-regular fa-heart "></i></button>
                </div>
            </div>
        </div>
    </>
  )
}
