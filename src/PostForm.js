import React, { useState, useEffect } from "react";
// import Axios from "axios";
import city from "./city.json";

function PostForm() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState({
    first_name: "atul",
    last_name: "bansal",
    email: "atulbansal@gmail.com",
    location: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log(data);
  }
  function handle(e) {
    // console.log(e.target.value);
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  useEffect(
    (e) => {
      // console.log(city);
      setItems(city)
    },
    [items]
  );

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
          />
          <br />
          <br />
          <label htmlFor="location">multi Location : &nbsp;</label>

          <select
            id="location"
            // value={data.location}
            onChange={(e) => setData({ ...data, location: e.target.value })}
          >
            {items.map((item) => {
              <option key={item.id}>{item.name}</option>;
            })}
            <option value="Location">Location</option>
            <option value="indore">indore</option>
            <option value="morena">morena</option>
            <option value="gwalior">gwalior</option>
          </select>
          <br />
          <br />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
