import React from "react";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const getdata = JSON.stringify(data);
    console.log(getdata);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          placeholder="First name"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Last Name</label>
        <input
          placeholder="Last name"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Age</label>a
        <input placeholder="Age" {...register("age", { min: 18, max: 60 })} />
        {errors.age && (
          <p>You Must be older then 18 and younger then 60 years old</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
