import React from 'react';
import Categories from './Categories';
import List from './List';
import Footer from './Footer';
import SearchFood from './SearchFood';
import {Routes,Route} from 'react-router-dom';
import Calories from './Calories';
import CalorieCalculation from './CalorieCalculation';


export default function Main() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Categories></Categories>}></Route>
          <Route path="/besinler" element={<List></List>}></Route>
          <Route path="/ara" element={<SearchFood></SearchFood>}></Route>
          <Route path="/besinler/azalan" element={<List></List>}></Route>
          <Route path="/besinler/artan" element={<List></List>}></Route>
          <Route path='/aldigimkaloriler' element={<Calories></Calories>}></Route>
          <Route path='/gunlukkaloriihtiyaci' element={<CalorieCalculation></CalorieCalculation>}></Route>
       </Routes>
       <Footer></Footer>
    </>
  )
}
