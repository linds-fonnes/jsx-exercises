const Person = ({ name, age, hobbies }) => {
  let info;
  if (age >= 18) {
    info = <h3>Please go vote!</h3>;
  } else {
    info = <h3>You must be 18 to vote </h3>;
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <span>{name} -- </span>
      <span>{age}</span>
      <span>{info}</span>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
