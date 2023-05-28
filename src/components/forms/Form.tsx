import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Box,
  Typography
} from '@mui/material';

const LoginForm: FC = () => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log(values, 'values');
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Please enter a valid email address').required('Please enter your email'),
    password: Yup.string().required('Please enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {
          ({ handleSubmit, isSubmitting }) => (
            <Box>
              {
                isSubmitting ? (
                  <Box>
                    Login Successfully
                  </Box>
                )
                  : (
                    <Form onSubmit={handleSubmit}>
                      <Typography variant="h4" component="h4">Login Form</Typography>
                      <Box style={{ margin: 4 }}>
                        <Typography>
                          <label htmlFor="name">Name:</label>
                        </Typography>
                        <Field type="text" id="name" name="name" style={{ padding: 13 }} />
                        <Box style={{ color: 'red', margin: 4 }}><ErrorMessage name="name" /></Box>
                      </Box>
                      <Box style={{ margin: 4 }}>
                        <Typography>
                          <label htmlFor="email">Email:</label>
                        </Typography>
                        <Field type="email" id="email" name="email" style={{ padding: 13 }} />
                        <Box style={{ color: 'red', margin: 4 }}><ErrorMessage name="email" /></Box>
                      </Box>
                      <Box style={{ margin: 4 }}>
                        <Typography>
                          <label htmlFor="password">Password:</label>
                        </Typography>
                        <Field type="password" id="password" name="password" style={{ padding: 13 }} />
                        <Box style={{ color: 'red', margin: 4 }}><ErrorMessage name="password" /></Box>
                      </Box>
                      <Button style={{ margin: 12 }} variant='contained' type="submit">Submit</Button>
                    </Form>
                  )
              }
            </Box>
          )
        }
      </Formik>
    </>
  )
}

export default LoginForm;
