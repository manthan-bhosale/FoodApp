import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <FoodList foodData={foodData}></FoodList>
    </div>
  );
}

export default App;
