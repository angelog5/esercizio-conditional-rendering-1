export default function Welcome({ name, age }) {
  return (
    <div>
      <h1>Ciao, {name}!</h1>
      {age > 18 && <p>{age}</p>}

      {age !== undefined && <p>{age}</p>}

      {age > 18 && age < 65 && <p>{age}</p>}

      {age > 18 && age < 65 && name === "John" && <p>{age}</p>}

      {age > 18 && name === "Doe" && <p>{age}</p>}
    </div>
  );
}
