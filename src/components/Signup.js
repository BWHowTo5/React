import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signup } from '../redux/actions';

const Signup = props => {
  const [creator, setCreator] = useState(false);
  return (
    <div className='Signup'>
      <h3>Create an Account</h3>
      <Formik
        className='userForm'
        initialValues={{ username: '', email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(3, 'Username must be at least 3 characters')
            .max(15, 'Username must be at under 15 characters')
            .matches(
              /^[a-zA-Z0-9_.]*$/,
              'Username cannot contain special characters'
            )
            .required('Username is Required'),
          email: Yup.string()
            .email('Not a valid e-mail address.')
            .required('Email is required.'),
          password: Yup.string()
            .min(8, 'Password must be least 8 characters')
            .matches(
              /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()?~])/,
              'Password must have a letter, number, and special character'
            )
            .matches(
              /^[a-zA-Z0-9_!@#$%^&*()?~]*$/,
              'Password contains a restricted character'
            )
            .required('Password is required.'),
          confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('You must confirm your password.')
        })}
        onSubmit={values => {
          props.signin({
            username: values.username,
            email: values.email,
            password: values.password,
            creator: creator
          });
        }}
      >
        {({ values, touched, errors, submitForm }) => (
          <Form>
            <Field type='text' name='username' placeholder='Username' />
            {touched.username && errors.username ? (
              <div className='formError'>{errors.username}</div>
            ) : (
              <div className='formError' />
            )}
            <Field type='email' name='email' placeholder='Email' />
            {touched.email && errors.email ? (
              <div className='formError'>{errors.email}</div>
            ) : (
              <div className='formError' />
            )}
            <Field type='text' name='password' placeholder='Enter Password' />
            {touched.password && errors.password ? (
              <div className='formError'>{errors.password}</div>
            ) : (
              <div className='formError' />
            )}
            <Field type='text' name='confirm' placeholder='Confirm Password' />
            {touched.confirm && errors.confirm ? (
              <div className='formError'>{errors.confirm}</div>
            ) : (
              <div className='formError' />
            )}
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setCreator(false);
                  submitForm();
                }}
                className='user'
              >
                Become a User
              </button>
              <button
                type='button'
                onClick={() => {
                  setCreator(true);
                  submitForm();
                }}
                className='creator'
              >
                Become a Creator
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.testKey
  };
};

export default connect(mapStateToProps, { signup })(Signup);
