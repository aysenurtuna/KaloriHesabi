import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../Context/Foods";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import * as bootstrap from "bootstrap";
import Search from "./Search";

export default function SearchFood() {
  const { searchFood } = useContext(FoodContext);

  const [food, setFood] = useState([{}]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/ara/${searchFood}`).then((response) => {
      setFood(response.data);
    });
  },[searchFood]);

  const addDB = (besin, kalori,miktar) => {
    Axios.post(`http://localhost:3001/insert`, {
      besin: besin,
      kalori: kalori,
      miktar:miktar,
    }).then(() => {
      alert("succesful insert");
    });

    document.querySelector(".in-num").value = 1;

    const toastLiveExample = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  };

  if (food.length === 0) {
    return (
      <>
        <Search></Search>
        <div className="alert alert-danger uyari" role="alert">
          Lütfen doğru yazdığınızdan emin olun.
        </div>
      </>
    );
  } else {
    return (
      <>
        <Search></Search>
        <table className="table table-hover mx-auto my-5 p-sm-5">
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
            {
              food.map((f,i)=>{
                return (<tr key={i}>
                  <th scope="row">1</th>
                  <td>{f.besin_adi}</td>
                  <td className="miktar">{f.miktar}</td>
                  <td>{f.kalori}</td>
                  <td>
                    <div className="num-block skin-2">
                      <div className="num-in">
                        <span
                          className="minus dis"
                          onClick={function () {
                            if (document.querySelector("in-num").value > 1)
                              document.querySelector(".in-num").value--;
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
                            if (document.querySelector(".in-num").value < 10)
                              document.querySelector(".in-num").value++;
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
                          f.besin_adi,
                          f.kalori,
                          document.querySelector(".in-num").value
                        );
                      }}
                    >
                      Ekle
                    </button>
                  </td>
                </tr>)
              })
            }
            
          </tbody>
        </table>

        {/* toast message */}
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="liveToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Başarılı İşlem</strong>
              <small>1 mins ago</small>
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
      </>
    );
  }
}
