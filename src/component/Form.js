import React from "react";
import { useForm } from "react-hook-form";

function Form() {
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
    <div className="conatiner  d-flex justify-content-center mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-12  ">
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
        <br />
        <div className="col-md-12  ">
          <label htmlFor="lastname " className="form-label">
            Last Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            id={"lastname"}
            type="text"
            placeholder="Last Name"
            className={`form-control  ${errors.firstname && true}`}
            {...register("lastname", {
              required: "Last name is required",
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
              trigger("lastname");
            }}
          />

          {errors.lastname && (
            <span style={{ color: "red" }}>{errors.lastname.message}</span>
          )}
        </div>
        <br />

        <input type="submit" className="col-md-4 mx-3" />
      </form>
    </div>
  );
}

export default Form;
