import React from 'react';
import Header from './Components/Header.jsx';
import Counter from './Cmponents/Counter.jsx';

const App = () => {
  return (
    <div>
      <Header title="Debugging React App" />
      <Counter />
      <UserCard name="Stanley" age={25} />
    </div>
  );
};

export default App;
