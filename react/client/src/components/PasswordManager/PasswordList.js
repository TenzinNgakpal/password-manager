import './PasswordList.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function Input() {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordList, setPasswordList] = useState([])

  useEffect(()=> {
    Axios.get('http://localhost:3001/showpasswords').then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const addEntry = () => {
    Axios.post('http://localhost:3001/addentry', {
      title: title,
      username: username,
      password: password,
    });
  };

  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3001/decryptpassword", { 
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      setPasswordList(passwordList.map((val) => {
        return val.id === encryption.id 
        ? {
          id: val.id, 
          username: val.username, 
          password: val.password, 
          title: response.data, 
          iv: val.iv,
        }
        : val;
      }))
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
      <div className="Passwords">
        {passwordList.map((val, key) => {
          return (
            <div className="password" onClick={() => {
              decryptPassword({
                username: val.username,
                password: val.password, 
                iv: val.iv,
                id: val.id,
              })
            }}
            key={key}
            >
              <h3>{val.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Input;