// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [tesla, honda] = cars;

const {
  coloursByPopularity: [teslaTopColour, tesla_2color],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  coloursByPopularity: [hondaTopColour, honda_2color],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const css = {
  border: "10px",
  color: "red",
};

ReactDOM.render(
  <table>
    <tr style={css}>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
