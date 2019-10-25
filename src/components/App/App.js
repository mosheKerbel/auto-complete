import React from "react";
import styles from "./App.module.css";
import AutoComplete from "./AutoComplete";

const options = ["Israel", "England", "USA", "France"];

function App() {
  return (
    <div className={styles.example}>
      <AutoComplete options={options} />
    </div>
  );
}

export default App;
