import React, { useContext, useEffect } from "react";
import { FoodContext } from "../Context/Foods";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import * as bootstrap from "bootstrap";
import Search from "./Search";
import { useState } from "react";

export default function List() {
  const { foods, setFoods, foodType } = useContext(FoodContext);
  const [desc,setDesc] = useState("");


  
  let buttons = [];
  useEffect(() => {
    buttons = document.querySelectorAll(".in-num");
  });
  
  useEffect(()=>{
    Axios.get(`http://localhost:3001/besinler/description/${foodType}`).then(
      (response) => {
        let data = response.data[0].aciklama;
        setDesc(data);
      }
    );
  },[]);

  const ascFoods = (foodType) => {
    Axios.get(`http://localhost:3001/besinler/artan/${foodType}`).then(
      (response) => {
        setFoods(response.data);
      }
    );
  };

  const descFoods = (foodType) => {
    Axios.get(`http://localhost:3001/besinler/azalan/${foodType}`).then(
      (response) => {
        setFoods(response.data);
      }
    );
  };

  const addDB = (besin, kalori, tekrar) => {
    Axios.post(`http://localhost:3001/insert`, {
      besin: besin,
      kalori: kalori,
      tekrar: tekrar,
    }).then(() => {
      alert("succesful insert");
    });
    const toastLiveExample2 = document.getElementById("liveToast2");
    const toast = new bootstrap.Toast(toastLiveExample2);
    toast.show();

    document.querySelector(".in-num").value = 1;
  };

  return (
    <>
      <Search></Search>
      <div className="container food-desc p-3">
           <p>&nbsp;&nbsp;{desc}</p>
      </div>
      <div className="order-btn mx-auto my-5">
        <NavLink to="/besinler/artan">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {ascFoods(foodType);}}>
            Kalori Artan
          </button>
        </NavLink>

        <NavLink to="/besinler/azalan">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              descFoods(foodType);
            }}
          >
            Kalori Azalan
          </button>
        </NavLink>
      </div>
      <div className="my-5">
        <table className="table table-hover mx-auto p-sm-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Besin</th>
              <th scope="col">Miktar</th>
              <th scope="col">Kalori</th>
              <th scope="col" className="ps-5">
                Artır
              </th>
              <th scope="col">Listeye Ekle</th>
            </tr>
          </thead>
          <tbody>
            {foods.map(function (besin, i) {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{besin.besin_adi}</td>
                  <td className="miktar">{besin.miktar}</td>
                  <td>{besin.kalori}</td>
                  <td>
                    <div className="num-block skin-2">
                      <div className="num-in">
                        <span
                          className="minus dis"
                          onClick={function () {
                            if(buttons[i].value>1)
                            buttons[i].value --;
                          }}
                        ></span>
                        <input
                          type="text"
                          className="in-num"
                          value="1"
                          readonly=""
                          max="10"
                          min="1"
                        />
                        <span
                          className="plus"
                          onClick={function () {
                            if(buttons[i].value<10)
                            buttons[i].value ++;
                          }}
                        ></span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        addDB(
                          besin.besin_adi,
                          besin.kalori,
                          buttons[i].value
                        );
                      }}
                    >
                      Ekle
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="my-5 mx-5 ps-5">
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fillRule="black"
            className="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </NavLink>
      </div>
      {/* toast message */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast2"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Başarılı İşlem</strong>
            <small>1 second ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Besin listenize eklendi.</div>
        </div>
      </div>
    </>
  );
}
