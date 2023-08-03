import React, { useContext } from "react";
import { FoodContext } from "../Context/Foods";

export default function Footer() {
  const { mevsimUrunleri } = useContext(FoodContext);

  let tarih = new Date();
  let month = tarih.getMonth() + 1;
  let monthString = "";

  switch (month) {
    case 1:
      case 2:
        case 12:
      monthString = "kış";
      break;
      case 3:
        case 4:
          case 5:
      monthString = "ilkbahar";
      break;
      case 6:
        case 7:
          case 8:
      monthString = "yaz";
      break;
      case 9:
        case 10:
          case 11:
      monthString = "sonbahar";
      break;

    default:
      break;
  }

  return (
    <div className="footer">
      <div>
        {mevsimUrunleri.map((val,i) => {
          if (val.mevsim === monthString) {
            return (
              <div className="footer-info" key={i}>
                <div className="mevsimlik">
                  <p className="mevsim-title">{monthString} meyveleri:</p> 
                  <ul>
                    {
                      val.meyve.map((meyve,i)=>{
                        return <li className="footer-li" key={i}>{meyve}   -</li>
                      })
                    }
                  </ul>
                </div>
                <div className="mevsimlik ms-2 me-2">
                  <p  className="mevsim-title">{monthString} sebzeleri: </p>
                  <ul>
                    {
                      val.sebze.map((sebze,i)=>{
                        return <li className="footer-li" key={i}>{sebze}   -</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            );
          }
          else return 0;
        })}
      </div>
    </div>
  );
}
