import './Input.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function Input() {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addEntry = () => {
    Axios.post('http://localhost:3001/addentry', {
      title: title,
      username: username,
      password: password,
    });
  };

  return (
    <div className="App">
      <div className="InputPassword">
        <input 
          type="text" 
          placeholder="Site Name"
          onChange={(event)=> {setTitle(event.target.value)}} 
        />
        <input 
          type="text" 
          placeholder="Username" 
          onChange={(event)=> {setUsername(event.target.value)}}
        />  
        <input 
          type="text" 
          placeholder="Password" 
          onChange={(event)=> {setPassword(event.target.value)}}
        />
        <button onClick={addEntry}>Add</button>
      </div>
    </div>
  );
}

export default Input;