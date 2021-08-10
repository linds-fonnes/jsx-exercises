const App = () => {
  return (
    <div>
      <Tweet username="doggo" name="Dog" date="Feb 11 2011" message="Woof!!!" />
      <Tweet
        username="mowmow"
        name="Cat"
        date="Feb 12 2012"
        message="Meeeeeow!"
      />
      <Tweet
        username="tweeeter"
        name="Bird"
        date="Feb 13 2013"
        message="TWEEEEEET!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
