import React, { useState } from "react";

function Login() {
  const [data, setData] = useState("");
  const [pass, setPass] = useState("");
  const [value, setValue] = useState(false);
  // let data = "atul bansal";
  // let pass = "8871075742";

  const loginHandler = (e) => {
    // data = "Iron Man";
    // pass = "0000000007";
    // alert(data);
    // alert(pass);
    console.log(data, pass);
    setValue(true)
  };
  const getuserId = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };
  const getuserPass = (e) => {
    console.log(e.target.value);
    setPass(e.target.value);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <input
          type="text"
          value={data}
          placeholder="Enter User id"
          onChange={getuserId}
        />
        <input
          value={pass}
          type="text"
          placeholder="Enter User password"
          onChange={getuserPass}
        />

        <button onClick={loginHandler}>Login</button>
      </div>
      {value ? (
        <>
          <h1>ID :{data}-</h1>
          <h1>Pass:-{pass}</h1>
        </>
      ) : null}
    </div>
  );
}

export default Login;
