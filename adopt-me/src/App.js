import { StrictMode, useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import ThemeContext from "./ThemeContext";
// import SearchParams from "./SearchParams";
// import Details from "./Details";

// This is dynamic importing
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <Suspense fallback={<h2>loading, be patient</h2>}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me! </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

export default App;
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
