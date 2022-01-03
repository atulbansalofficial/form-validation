import React, { useState } from "react";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [getData, setData] = useState([]);

  const loginHandler = (e) => {
    if (userId.length < 3 || password.length < 3) {
      alert("type Correct Value");
    } else {
      alert("All Good!");
    }
    e.preventDefault();
    console.log("hi");
    let value = [...getData];

    setData([...value, userId, password]);
    console.log(getData);
  };
  const userHandler = (e) => {
    if (e.target.value.length < 3) {
      setUserError(true);
    } else {
      setUserError(false);
    }

    setUserId(e.target.value);
  };
  const passwordHandler = (e) => {
    if (e.target.value.length < 3) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    setPassword(e.target.value);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          placeholder="Enter User id"
          value={userId}
          onChange={(data) => {
            userHandler(data);
          }}
        />
        {userError ? <span>User Not Valid</span> : ""}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter User password"
          onChange={(data) => {
            passwordHandler(data);
          }}
        />{" "}
        {passwordError ? <span>Password Not Valid</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>

      <p> User Id :-{userId}</p>
      <p> Password :-{password}</p>
    </div>
  );
}

export default Login;
