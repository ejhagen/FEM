import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Apopt Me!"),
//     React.createElement(Pet, {
//       name: "Owsley",
//       animal: "Dog",
//       breed: "Border Collie",
//     }),
//     React.createElement(Pet, {
//       name: "Kemo",
//       animal: "Dog",
//       breed: "American Eskimo",
//     }),
//     React.createElement(Pet, {
//       name: "Bailey",
//       animal: "Dog",
//       breed: "Beagle",
//     }),
//   ]);
// };
