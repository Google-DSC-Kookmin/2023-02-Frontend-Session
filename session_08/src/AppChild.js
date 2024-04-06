import { React } from 'react';

function AppChild() {
  console.log("Child component rendered");

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default AppChild;