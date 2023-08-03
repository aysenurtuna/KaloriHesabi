import React, { useEffect, useState } from "react";

export default function CalorieCalculation() {
  const [gki, setGki] = useState();

  useEffect(()=>{
    if(gki)
    document.querySelector(".gki").classList.add("show");
  })

  const handleClick = () => {
    
    let cinsiyet = document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    ).value;
    let boy = document.querySelector(".boy").value;
    let kilo = document.querySelector(".kilo").value;
    let yas = document.querySelector(".yas").value;
    
    if (cinsiyet, boy, kilo, yas) {
      if (cinsiyet === "kadin") {
        setGki(Math.ceil(655 + (9.66 * kilo) + (1.88 * boy) - (4.7 * yas)));
      } else if (cinsiyet === "erkek") {
        setGki(Math.ceil(66 + (13.7 * kilo) + (5 * boy) - (6.8 * yas)));
      }
    }
    else{
      alert("Lütfen tüm alanları doldurun!");
      setGki(0);
    }
  }
 
  return (
    <>
      <form>
        <div className="calorie-calculation col-lg-4 col-md-6 col-sm-8 p-4">
          <div className="form-area m-3">
            <p className="d-inline">Cinsiyet: </p>
            <div className="form-check d-inline-block ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="kadin"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Kadın
              </label>
            </div>
            <div className="form-check d-inline-block ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="erkek"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Erkek
              </label>
            </div>
          </div>
          <div className="form-area m-3">
            <p className="d-inline">Kilo (kg):</p>
            <input
              className="form-control text-input kilo ms-4"
              type="text"
            />
          </div>
          <div className="form-area m-3">
            <p className="d-inline">Boy (cm):</p>
            <input
              className="form-control text-input boy ms-3"
              type="text"
            />
          </div>
          <div className="form-area m-3">
            <p className="d-inline">Yaş:</p>
            <input
              className="form-control text-input yas ms-5"
              type="text"
            />
          </div>
          <div className="form-area text-end m-3">
            <button
              type="button"
              className="btn hesapla m-3"
              onClick={handleClick}>
              Hesapla
            </button>
          </div>
        </div>
      </form>
        <div className="text-center gki mb-5">
        Günlük almanız gereken kalori miktarı : {gki}
        </div>
    </>
  );
}
