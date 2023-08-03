import { useEffect, useState } from 'react';
import FoodCards from './FoodCards'
import Axios from 'axios';
import Search from './Search';

export default function Categories() {

  const[foodTypes,setFoodTypes] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001").then((response)=>{
      setFoodTypes(response.data);
    })
    document.querySelector("#search").value = "";
  },[]);

  return (
    <>
    <Search></Search>
    <div className="container my-5 py-3">
        <div className="row">
          {
            foodTypes.map((type)=>{
              return (<FoodCards prop={type}></FoodCards>);
            })
          }
        </div>
      </div>
    </>
  )
}
