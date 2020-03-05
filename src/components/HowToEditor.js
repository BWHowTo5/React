import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import HowToParser from './HowToParser';
import { holdHowToForm } from '../redux/actions';

const HowToEditor = props => {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className='HowToEditor'>
      <h1>How To Editor</h1>
      <Formik
        initialValues={{ title: '', summary: '', content: '' }}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .min(3, 'Title must be at least 3 characters')
            .max(60, 'Title must be at under 60 characters')
            .matches(
              //This restriction helps prevent SQL injections
              /^[a-zA-Z0-9_!@#$%^&*()?~+`~,. :'"-]*$/,
              'Title contains a restricted character'
            )
            .required('Title is required'),
          summary: Yup.string()
            .min(3, 'Summary must be at least 3 characters')
            .max(200, 'Summary must be at under 200 characters')
            .matches(
              //This restriction helps prevent SQL injections
              /^[a-zA-Z0-9_!@#$%^&*()?~+`~,. :'"-]*$/,
              'Summary contains a restricted character'
            )
            .required('Summary is required'),
          content: Yup.string()
            .min(40, 'Content must have at least 40 characters')
            .matches(
              //This restriction helps prevent SQL injections
              /^[a-zA-Z0-9_!@#$%^&*()?~+`~,. :'"\n[\]<>-]*$/,
              'Content contains a restricted character'
            )
            .required('Content is required')
        })}
        onSubmit={values => {
          if (props.match.params.id) {
            console.log('id found');
            props.holdHowToForm({
              id: props.howto.id,
              title: values.title,
              summary: values.summary,
              content: values.content,
              author: props.howto.author,
              likes: props.howto.id,
              dislikes: props.howto.id
            });
          } else {
            console.log('id not found');
            props.holdHowToForm({
              id: -1,
              title: values.title,
              summary: values.summary,
              content: values.content,
              author: -1, //user.id,
              likes: 0,
              dislikes: 0
            });
          }
          if (!showPreview) {
            props.history.push(`/howto/${props.match.params.id}`);
          }
        }}
      >
        {({ values, touched, errors, resetForm, submitForm }) => (
          <Form>
            <div className='buttons'>
              <button
                onClick={() => {
                  setShowPreview(true);
                  submitForm();
                }}
                type='button'
                className='preview'
              >
                Preview
              </button>
              <button
                onClick={() => {
                  setShowPreview(false);
                  submitForm();
                }}
                type='button'
                className='submit'
              >
                Submit
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure? All changes will be lost.'))
                    resetForm();
                }}
                type='button'
                className='clear'
              >
                Clear
              </button>
              <button
                onClick={e => {
                  if (window.confirm('Are you sure? All changes will be lost.'))
                    props.history.push('/home');
                }}
                type='button'
                className='cancel'
              >
                Cancel
              </button>
            </div>
            <div className='formBody'>
              <h2>Title</h2>
              <Field component='textarea' className='title' name='title' />
              {touched.title && errors.title ? (
                <div className='formError on'>{errors.title}</div>
              ) : (
                <div className='formError' />
              )}
              <h2>Summary</h2>
              <Field component='textarea' className='summary' name='summary' />
              {touched.summary && errors.summary ? (
                <div className='formError on'>{errors.summary}</div>
              ) : (
                <div className='formError' />
              )}

              {touched.content && errors.content ? (
                <div className='formError on'>{errors.content}</div>
              ) : (
                <div className='formError' />
              )}
              <h2>Content</h2>
              <div className='help'>
                <h3>#,##,### to make large, medium, and small headings</h3>
                <h3>[Link Text](URL) to make a link</h3>
                <h3>&lt;URL&gt; to import a picture</h3>
              </div>
              <Field component='textarea' className='content' name='content' />
            </div>
            <div className='buttons'>
              <button
                onClick={() => {
                  setShowPreview(true);
                  submitForm();
                }}
                type='button'
                className='preview'
              >
                Preview
              </button>
              <button
                onClick={() => {
                  setShowPreview(false);
                  submitForm();
                }}
                type='button'
                className='submit'
              >
                Submit
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure? All changes will be lost.'))
                    resetForm();
                }}
                type='button'
                className='clear'
              >
                Clear
              </button>
              <button
                onClick={e => {
                  if (window.confirm('Are you sure? All changes will be lost.'))
                    props.history.push('/home');
                }}
                type='button'
                className='cancel'
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {showPreview ? <HowToParser /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    howto: state.howto,
    user: state.user
  };
};

export default connect(mapStateToProps, { holdHowToForm })(HowToEditor);
