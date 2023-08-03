import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { FoodProvider } from "./Context/Foods";

function App() {
  return (
    <>
        <FoodProvider><Header></Header></FoodProvider>
        <FoodProvider><Main></Main></FoodProvider>
    </>
  );
}

export default App;
