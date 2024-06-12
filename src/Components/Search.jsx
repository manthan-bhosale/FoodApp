import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://fakestoreapi.com/products";
const API_KEY = "45dfa68d00684779995901cfa78d4f6d";

function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data);
    };

    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}

export default Search;
