import React from "react";

const RickAndMorty = ({id, name, status, species, gender, image}) => {

    return(
        <div>
            <h2>{id} {name}</h2>
            <img src={image} alt={name}/>
            <h3>Status:{status},
                Species:{species},
                Gender:{gender}</h3>
        </div>
        )

}

export default RickAndMorty;
