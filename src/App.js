import React, { useState, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";

const GreetingContext = createContext();

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Contador</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

const Greeting = ({ name }) => {
  return (
    <div>
      <h2>¡Hola, {name}!</h2>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Ingrese su nombre"
      />
      <GreetingContext.Provider value={username || "Usuario"}>
        <GreetingWithContext />
      </GreetingContext.Provider>
      <Counter />
    </div>
  );
};

const GreetingWithContext = () => {
  const name = useContext(GreetingContext);
  return <Greeting name={name} />;
};

export default App;