const Pet = (props) => {
    return React.createElement("div", null, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {},
      [
          React.createElement("h1", {}, "Apopt Me!"),
          React.createElement(Pet, {
            name: "Owsley",
            animal: "Dog",
            breed: "Border Collie"
          }),
          React.createElement(Pet, {
            name: "Kemo",
            animal: "Dog",
            breed: "American Eskimo"
          }),
          React.createElement(Pet, {
            name: "Bailey",
            animal: "Dog",
            breed: "Beagle"
          })
      ]
    );
  };

  ReactDOM.render(React.createElement(App), document.getElementById("root"));