import React from "react";

const Simpson = ({surname,name,img} ) => {
  return(
      <div>
          <h1>{name} {surname}</h1>
          <img src={img} alt={name}/>
      </div>
  )
};
export default Simpson;
