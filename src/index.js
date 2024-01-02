import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [extRating, setExtRating] = useState(0);
  return (
    <div>
      <StarRating color={"blue"} maxRating={10} onSetExtRate={setExtRating} />
      <p>This movie was rated {extRating} on the box office!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      size={28}
      color="#fcc419"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      rate={3}
    />
    <div>
      {Array.from({ length: 100 }, (_, i) => (
        <span key={i}>-</span>
      ))}
    </div>
    <StarRating />
    <Test />
  </React.StrictMode>
);
