import React, { useState } from "react";
import "./styles.css";
var emojilist = {
  "🤺": "Fencing",
  "🏇": "Horse Riding",
  "⛷️": "Skating",
  "🏄‍♂️": "Surfing",
  "🚣‍♂️": "River Rafting",
  "🏋️‍♂️": "Weight Lifting",
  "🚴‍♂️": "Cycling",
  "🤸‍♂️": "Gymnastic",
  "⛹️‍♀️": "BasketBall",
  "🤼‍♂️": "Wresting"
};

var emojis = Object.keys(emojilist);

export default function App() {
  var [emojiinput, setemojiinput] = useState("");
  function emojihandler(event) {
    var meaning = emojilist[event.target.value];
    if (meaning === undefined) meaning = "Not Found in database.";
    setemojiinput(meaning);
  }
  function clickhandler(item) {
    setemojiinput(emojilist[item]);
  }
  return (
    <div className="App">
      <h1>Olympic Interpreter</h1>
      <input onChange={emojihandler}></input>
      <h2 style={{ color: "black" }}> {emojiinput}</h2>
      <h3 style={{ color: "black" }}>Emojis in database</h3>
      <div id="emojis">
        {emojis.map((item) => {
          return (
            <span
              key={item}
              style={{
                fontSize: "3rem",
                padding: "1rem",
                cursor: "pointer"
              }}
              onClick={() => clickhandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
