const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "kalori",
});

app.get("/", (req, res) => {
    const sqlSelect = "SELECT besin_turu,img FROM besinturu_aciklama";
    
    db.query(sqlSelect,(err,result)=>{
      res.send(result);
    })
});

app.get("/ara/:input", (req, res) => {
  const besin = `%${req.params.input}%`;
  const getFoods = "SELECT * FROM besin where besin.besin_adi like ?;";

  db.query(getFoods,besin,(err,result) => {
    res.send(result);
  })
});

app.get("/besinler/:type", (req, res) => {
  const tur = req.params.type;
  const getFoods = "SELECT besin_adi,miktar,kalori,aciklama FROM besin,besinturu_aciklama WHERE besin.besin_turu = besinturu_aciklama.besin_turu AND besin.besin_turu = ?;";

  db.query(getFoods,tur,(err,result) => {
    res.send(result);
  })
});

app.get("/besinler/artan/:type", (req, res) => {
  const tur = req.params.type;
  const getFoods = "SELECT besin_adi,miktar,kalori,aciklama FROM besin,besinturu_aciklama WHERE besin.besin_turu = besinturu_aciklama.besin_turu AND besin.besin_turu = ? ORDER BY kalori asc;";

  db.query(getFoods,tur,(err,result) => {
    res.send(result);
  })
});

app.get("/besinler/azalan/:type", (req, res) => {
  const tur = req.params.type;
  const getFoods = "SELECT besin_adi,miktar,kalori,aciklama FROM besin,besinturu_aciklama WHERE besin.besin_turu = besinturu_aciklama.besin_turu AND besin.besin_turu = ? ORDER BY kalori desc;";

  db.query(getFoods,tur,(err,result) => {
    res.send(result);
  })
});

app.get("/besinler/description/:foodType", (req, res) => {
  const type = req.params.foodType;
  const description = "SELECT aciklama FROM besinturu_aciklama WHERE besin_turu = ?";
  
  db.query(description,type,(err,result)=>{
    res.send(result);
  })
});


app.post("/insert", (req, res) => {

  const besin = req.body.besin;
  const kalori = req.body.kalori;
  const tekrar = req.body.tekrar;

  const addFood = "INSERT INTO liste (besin,kalori,tekrar) VALUES (?,?,?)";

  db.query(addFood,[besin,kalori,tekrar],(err,result) => {
    console.log(result);
  })
});

app.delete("/delete/:besin", (req, res) => {

  const besin = req.params.besin;

  const deleteFood = "DELETE FROM liste WHERE besin = ?";

  db.query(deleteFood,besin,(err,result) => {
    console.log(result);
  })
});

app.get("/aldigimkaloriler", (req, res) => {
  const getCalories = "SELECT  liste.besin, liste.kalori, liste.tekrar, besin.miktar FROM  liste inner join  besin on  besin.besin_adi =  liste.besin ;";
  
  db.query(getCalories,(err,result)=>{
    res.send(result);
  })
});


app.listen(3001, () => {
  console.log("running on port 3001");
});
