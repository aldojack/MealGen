import React from 'react'

export default function Meal({day, props}) {
  return (
    <div
    className="day-container border-2 border-black rounded-lg bg-slate-300 px-4 py-2 my-2"
    style={{ minWidth: "250px" }}
  >
    <h2 className="day-title">{day}</h2>
    <p className="day-meal text-sm"> {props.name}</p>
    <p className="day-tag text-xs rounded-lg bg-teal-300 w-fit px-2"> {props.foundAt}</p>
    <div className="day-btns-group flex flex-col space-y-2">
      <button className="day-infoBtn bg-slate-600 text-white px-2 rounded-md hover:bg-slate-400 hover:text-black">
        Recipe
      </button>
      <button className="day-infoBtn bg-slate-600 text-white px-2 rounded-md hover:bg-slate-400 hover:text-black">
        Find
      </button>
      <button className="day-infoBtn bg-slate-600 text-white px-2 rounded-md hover:bg-slate-400 hover:text-black">
        Ingredients
      </button>
    </div>
  </div>
  )
}
