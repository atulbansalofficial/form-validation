import React, { useState } from "react";
// import Axios from "axios";

function PostForm() {
  const url = "http://localhost:4000/api/students";
  const [data, setData] = useState({
    first_name: "atul",
    last_name: "bansal",
    email: "atulbansal@gmail.com",
    password: null,
  });

  function submit(e) {
    e.preventDefault();
    console.log(data);
    

    // Axios.post(url, {
    //   first_name: data.first_name,
    //   last_name: data.last_name,
    //   email: data.email,
    // }).then((res) => {
    //   console.log(res.data);
    // });
  }
  function handle(e) {
    // console.log(e.target.value);
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <div className="container mt-5 d-flex justify-content-center bg-dark  p-5 text-white">
        <form onSubmit={(e) => submit(e)}>
          <label htmlFor="first_name">First Name : &nbsp;</label>
          <input
            onChange={(e) => handle(e)}
            type="text"
            id="first_name"
            placeholder="First Name"
          />
          <br />
          <br />
          <label htmlFor="last_name">Last Name : &nbsp;</label>
          <input
            onChange={(e) => handle(e)}
            type="text"
            id="last_name"
            placeholder="Last Name"
          />
          <br />
          <br />
          <label htmlFor="email">Email : &nbsp;</label>
          <input
            onChange={(e) => handle(e)}
            type="email"
            id="email"
            placeholder="E-mail"
          />{" "}
          <br />
          <br />
          <label htmlFor="password">Password : &nbsp;</label>
          <input
            onChange={(e) => handle(e)}
            type="password"
            id="password"
            placeholder="Password"
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
