import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signin } from '../redux/actions';

const Login = props => {
  return (
    <div className='Login'>
      <h3>Log In</h3>
      <Formik
        className='userForm'
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Not a valid e-mail address.')
            .required('Email is required.'),
          password: Yup.string().required('Password is required.')
        })}
        onSubmit={values => {
          props.signin(values);
        }}
      >
        {({ values, touched, errors }) => (
          <Form>
            <Field type='email' name='email' placeholder='Email' />
            {touched.email && errors.email ? (
              <div className='formError'>{errors.email}</div>
            ) : (
              <div className='formError' />
            )}
            <Field type='password' name='password' placeholder='password' />
            {touched.password && errors.password ? (
              <div className='formError'>{errors.password}</div>
            ) : (
              <div className='formError' />
            )}
            <Field className='button' type='submit' value='Log In' />
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

export default connect(mapStateToProps, { signin })(Login);
