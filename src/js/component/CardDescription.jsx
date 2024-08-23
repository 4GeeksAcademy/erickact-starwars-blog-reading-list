import React, { useContext } from 'react';

export const CardDescription = (props) => {

    const {item, image, propertiesToShow} = props

    if(!item){return null}

  return (
    <div className='d-flex justify-content' style={{marginTop:"60px"}}>
        <div className=" mb-3" style={{maxWidth: "600px", maxHeight:"500px"}}>
            <div className="row border rounded-3">
                <div className="col-md-6 p-0">
                     <img src={image} className="img-fluid rounded-start rounded-circle object-fit-cover h-100" style={{height:"400px", width:"300px"}} alt="..."/>
                </div>
                <div className="col-md-6">
                <div className="card-body ">
                    <h4 className="card-title mb-4 fw-bold text-white text-decoration-underline">{item?.name}</h4>
                    {
                        propertiesToShow.map((key)=>{
                           return <p className='text-uppercase text-primary fw-bold' key={key}>{key}:<span className='ms-2 text-lowercase text-white fw-medium'>{item.properties?.[key]}</span></p>
                        })
                    }
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
