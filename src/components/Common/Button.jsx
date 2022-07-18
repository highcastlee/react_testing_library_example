import React from "react";

export function Button ({ type="submit", text="", onClick=()=>null }){

  return (
    <button type={type} onClick={onClick}>{text}</button>
  )
}