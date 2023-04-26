import './PasswordList.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function Input() {
  const [passwordList, setPasswordList] = useState([])

  useEffect(()=> {
    Axios.get('http://localhost:3001/showpasswords').then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3001/decryptpassword", { 
      password: encryption.password,
      iv: encryption.iv,
    }).then((response) => {
      setPasswordList(
        passwordList.map((val) => {
        return val.id === encryption.id
        ? {
          id: val.id,
          title: val.title,
          username: val.username,
          password: response.data,
          iv: val.iv,
        }
        : val;
      })
      );
    });
  };

  return (
    <div className="App">
      <div className="Passwords">
        {passwordList.map((val) => {
          return (
            <div className="password">
              <div className='listItem'>
                <h3>Title: {val.title}</h3>
              </div>
              <div className='listItem'>
                <h3>Username: {val.username}</h3>
              </div>
              <div className='listItem' onClick={() => {
              decryptPassword({
                password: val.password, 
                iv: val.iv,
                id: val.id,
              }
              );
            }}>
                <h3>Password: {val.password}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Input;