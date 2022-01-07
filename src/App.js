import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="conatiner">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6  ">
          <label htmlFor="firstname " className="form-label">
            First Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            id={"firstname"}
            type="text"
            placeholder="First Name"
            className={`form-control  ${errors.firstname && true}`}
            {...register("firstname", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "Please enter a valid name",
              },

              maxLength: {
                value: 50,
                message: "maximum length allowed is 50 word",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: " Please enter fully alphabate",
              },
            })}
            onKeyUp={() => {
              trigger("firstname");
            }}
          />

          {errors.firstname && (
            <span style={{ color: "red" }}>{errors.firstname.message}</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
