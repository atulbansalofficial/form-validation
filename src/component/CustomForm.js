import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const CustomForm = () => {
  const validationSchema = yup.object().shape({
    phone: yup.string().required(),
    name: yup.string()
      .min(2, 'Too Short!')
      .max(8, 'Too Long!')
      .required('Required'),

  })

  const object = {
    name: "",
    phone: "",
    password: "",
    gender: "",
    date: "",
    income: "",
    about: "",
    social: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
    socialarray: [],
  }
  return (
    <div>
      <Formik initialValues={object} validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}>
        <Form> <br />
          <label htmlFor="name">Name: </label>
          <Field name="name" id="name" type="text"></Field>

          <br />
          <ErrorMessage name='name' />
          <br />
          <label htmlFor="phone">Phone: &nbsp;&nbsp;</label>
          <Field name="phone" id="phone" type="number"></Field>
          <br />
          <label htmlFor="password">Password: &nbsp;&nbsp;</label>
          <Field name="password" id="password" type="password"  ></Field>
          <br />
          <label htmlFor="Male">Gender: </label>&nbsp;&nbsp;
          <label htmlFor="Male">Male: </label>
          <Field name="gender" id="Male" value="male" type="radio" /> &nbsp;
          <label htmlFor="Female">Female: </label>
          <Field name="gender" id="Female" value="female" type="radio" />
          <br />
          <label htmlFor="date">Date: </label>
          <Field name="date" id="date" type="date"  ></Field>
          <br />
          <label htmlFor="income">Income: </label>
          <Field name="income" id="income" as="select"  >
            <option value="0">Rs 0</option>
            <option value="1">Rs 1</option>
            <option value="2">Rs 2</option>
            <option value="3">Rs 3</option>
          </Field>
          <br />
          <label htmlFor="about">About: </label>
          <Field name="about" id="about" as="textarea"></Field>
          <br />
          <label htmlFor="social.facebook">facebook: </label>
          <Field name="social.facebook" id="social.facebook" type="text"></Field>
          <br />
          <label htmlFor="social.twitter">twitter: </label>
          <Field name="social.twitter" id="social.twitter" type="text"></Field>
          <br />
          <label htmlFor="social.instagram">instagram: </label>
          <Field name="social.instagram" id="social.instagram" type="text"></Field>
          <br />

          <label htmlFor="socialarray">facebook: </label>
          <Field name="socialarray[0]" id="socialarray" type="text"></Field>
          <br />
          <label htmlFor="socialarray[1]">twitter: </label>
          <Field name="socialarray[1]" id="socialarray[1]" type="text"></Field>
          <br />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CustomForm