import Axios from 'axios';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FoodContext } from '../Context/Foods';

export default function FoodCards({prop}) {
  
  const { setFoods,setFoodType } = useContext(FoodContext);

  
  const getFoods = (type) => {
    Axios.get(`http://localhost:3001/besinler/${type}`).then((response)=>{
      setFoods(response.data);
    });
    setFoodType(type);
  };

  return (
    <>
      <div className="col card-col">
        <div className="card rounded-3 mx-auto">
          <img src={prop.img} className="card-img-top rounded-top-3" loading="lazy" alt={prop.besin_turu}/>
          <div className="card-body">
            <NavLink to="/besinler" className="nav-link">
              <p onClick={()=>{getFoods(prop.besin_turu)}} className="card-text food-type">{prop.besin_turu}</p>
            </NavLink>
          </div>
        </div> 
      </div>    
    </>
  )
}
