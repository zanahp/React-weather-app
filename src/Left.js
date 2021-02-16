import React from "react";
import Search from "./Search";

export default function Left() {
  return (
    <div className = "col-6">
      <Search defaultCity = "Miami" />
    </div>
  );
}