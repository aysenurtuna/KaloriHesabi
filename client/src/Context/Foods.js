import { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = (props) => {
  const [foods, setFoods] = useState([{}]);
  const [searchFood, setSearchFood] = useState({});
  const [foodType, setFoodType] = useState("");
  const [mevsimUrunleri] = useState([
    {
      mevsim: "ilkbahar",
      meyve: ["erik", "çilek", "muz", "çağla"],
      sebze: [
        "kuşkonmaz",
        "bezelye",
        "enginar",
        "bakla",
        "semizotu",
        "salatalık",
        "barbunya",
      ],
    },
    {
      mevsim: "yaz",
      meyve: [
        "kiraz",
        "çilek",
        "şeftali",
        "kayısı",
        "erik",
        "kavun",
        "karpuz",
        "üzüm",
        "dut",
        "incir",
        "böğürtlen",
        "armut",
      ],
      sebze: [
        "Enginar",
        "Semizotu",
        "Barbunya",
        "Domates",
        "Taze fasulye",
        "Patates",
        "Marul",
        "Kabak",
        "Bamya",
        "Dolmalık biber",
        "Taze sarımsak",
        "Mısır",
        "Börülce",
        "Salatalık",
        "Brokoli",
      ],
    },
    {
      mevsim: "sonbahar",
      meyve: ["elma", "portakal", "mandalina", "incir"],
      sebze: [
        "Bamya",
        "Pırasa",
        "Karnabahar",
        "Ispanak",
        "Soğan",
        "Sarımsak",
        "Lahana",
        "Roka",
      ],
    },
    {
      mevsim: "kış",
      meyve: [
        "elma",
        "portakal",
        "mandalina",
        "muz",
        "ayva",
        "nar",
        "greyfurt",
      ],
      sebze: [
        "Lahana",
        "Brüksel Lahanası",
        "Pazı",
        "Kereviz",
        "Havuç",
        "Karnabahar",
        "Pırasa",
        "Kabak",
        "Bal Kabağı",
        "Pancar",
        "Ispanak",
        "Turp",
        "Kuşkonmaz",
      ],
    },
  ]);

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        foodType,
        setFoodType,
        mevsimUrunleri: mevsimUrunleri,
        searchFood,
        setSearchFood,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
