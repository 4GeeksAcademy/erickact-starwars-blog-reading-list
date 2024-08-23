import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Cards = (props) => {
  const {title, id, image, urlPrefix} = props

  const { actions } = useContext(Context);

  return (
    <>
        <div className="border border-dark rounded-3 mx-3 d-inline-block" style={{width:"250px", height:"390px"}}>
          <img src={image} className="rounded object-fit-cover img-fluid w-100" alt="..." style={{height:"280px"}}/>
            <div className="card-body">
                <h5 className="card-title text-white">{title}</h5>
                <p className="card-text"></p>
                <div className='d-flex justify-content-between'>
                    <Link to={urlPrefix + id} className="btn btn-outline-primary">Learn More!</Link>
                    <button className='btn btn-outline-warning' onClick={()=>actions.addToFavorites({title, id})}><i className="fa-regular fa-heart "></i></button>
                </div>
            </div>
        </div>
    </>
  )
}
