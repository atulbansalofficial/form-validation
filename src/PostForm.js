import React, { useState } from "react";
import Axios from "axios";

function PostForm() {
  const url = "http://localhost:4000/axios";
  const [data, setData] = useState({
    fname: "",
    lname: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      firstname: data.fname,
      lastname: data.lname,
    }).then((res) => {
      console.log(res.data);
    });
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
          <label htmlFor="fname">First Name : &nbsp;</label>
          <input
            onChange={(e) => handle(e)}
            type="text"
            id="fname"
            placeholder="First Name"
          />
          <br />
          <br />
          <label htmlFor="lname">Last Name : &nbsp;</label>
          <input
            onChange={(e) => handle(e)}
            type="text"
            id="lname"
            placeholder="Last Name"
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
