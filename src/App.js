import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const [list, setList] = React.useState([]);
  const renderList = () => {
    // list = ["hi","hi"]
    return (
      <ul>
        {list.map((item) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  const handleAdd = () => {
    // ["hi", "hi"]
    const newList = list.concat("hi");
    setList(newList);
  }
  return (
    <div>
      <button onClick={handleAdd}> Click on me to add a new list item</button>
      {renderList()}
    </div>
  );
}
export default App;