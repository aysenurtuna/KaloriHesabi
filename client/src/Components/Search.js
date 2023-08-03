import React, { useContext } from "react";
import { FoodContext } from "../Context/Foods";
import { NavLink } from "react-router-dom";

export default function Search() {

  const { setSearchFood } = useContext(FoodContext);
  
  return (
    <>
      <div className="container-fluid">
        <img src={"images/kapak.jpg"} alt="kapak" id="kapak"></img>
        <p className="description">
          Kalori, neredeyse tüm gıdalarda bulunan vücudun temel fonksiyonlarını
          yerine getirmek için kullanması gereken bir enerji birimidir. Besinler
          kaloriyi; karbonhidrat, protein ve yağ şeklinde olarak verir.
          Karbonhidratlar, meyveler, sebzeler veya tahıl ürünlerinden,
          proteinler, süt ve süt ürünleri, hayvan etinden, yağlar ise bitki
          bazlı yağlardan bazı meyve ve sebzelerden gelmektedir.
        </p>

        <input
          type="text"
          id="search"
          className="form-control"
          placeholder="Besin Ara"
          aria-label="button"
          aria-describedby="button-addon1"
        ></input>
        <NavLink to="/ara">
          <button className="button" id="search-btn" onClick={function(){
            setSearchFood(document.querySelector("#search").value);
          }}>
            Ara
          </button>
        </NavLink>
      </div>
    </>
  );
}
