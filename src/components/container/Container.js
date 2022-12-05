import Header from "../header/Header";
import Search from "../search/Search";
import "./Container.css";
import React from "react";
import Card from "../card/Card";
import { MyContext } from "../context/Context";




// fetch(`https://api.github.com/users/${user}`)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);



export default function container() {
  return (
    <div className="container">
      <MyContext.Provider value={{}}>
        <Header />
        <Search />
        <Card />
      </MyContext.Provider>
    </div>
  );
}
