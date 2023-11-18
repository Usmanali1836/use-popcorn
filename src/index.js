import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App v1";
import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="Blue" onSetRating={setMovieRating} />
//       <p>This movie rated was {movieRating} star</p>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//
//     <StarRating
//       size={22}
//       color="red"
//       className="test"
//       defultStarRating={2}
//       // messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//     />
//     <Test />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <App2 /> */}
  </React.StrictMode>
);
