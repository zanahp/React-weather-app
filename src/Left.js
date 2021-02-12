import React from "react";
import Search from "./Search";
import Today from "./Today";

export default function Left() {
  return (
    <div className = "col-6">
      <Search />
      <Today defaultCity = "Miami"/>
    </div>
  );
}