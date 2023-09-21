import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { object, string } from 'yup';

let schema = object({
  name: string("Por favor ingrese todo en texto").min(3).required("este campo es obligatorio"),
  email: string().email("por favor ingrese un formato correcto").required("este campo es obligatorio"),
});

function App(props) {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.name}>
          <FormLabel>Name</FormLabel>
          <Input type='text' name="name" onChange={formik.handleChange}
          value={formik.values.name} />      
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type='email' name="email" onChange={formik.handleChange}
          value={formik.values.email} />      
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
