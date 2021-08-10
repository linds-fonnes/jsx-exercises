const App = () => (
  <div>
    <Person
      name="Tony"
      age={44}
      hobbies={["skiing", "snowboarding", "curling"]}
    />
    <Person name="Angie" age={13} hobbies={["scooters", "bikes", "naps"]} />
    <Person name="Marco" age={19} hobbies={["dancing", "grooving", "jiving"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
