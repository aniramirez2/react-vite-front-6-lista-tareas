
import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Flex, Box } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { api } from '../services/api';
import { useEffect, useState } from 'react';

let schema = object({
  name: string().min(3).required("este campo es obligatorio"),
  email: string().email("por favor ingrese un formato correcto").required("este campo es obligatorio"),
});

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isEditing, setIsEditing] = useState(false)

  useEffect(()=>{
    //llamar funcion de get
    getUsers();
  }, [])

  //esto se podria hacer con un useCallback
  const getUsers = async() => {
    const response = await api.get("/users")
    setUsersList(response.data)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      id: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      isEditing ?
      editUser(values) : existsUser(values)
    },
    enableReinitialize: true
  });

  const editUser = async (values) => {
    const obj = {
      id: values.id,
      name: values.name,
      email: values.email
    }
    const response = api.put(`/users/${obj.id}`, obj);
    alert("usuario actualizado correctamente");
    getUsers()
    formik.resetForm()
    setIsEditing(false)
  }

  const createUser = async (values) => {
    const objUser = {
      name: values.name,
      email: values.email
    }
    const response = await api.post("/users", objUser)
    formik.resetForm()
    if(response){
      alert("usuario creado exitosamente")
      getUsers()
    }
  }

  const existsUser = async (values) => {
    try {
      const response = await api.get('/users?email='+values.email);
      if(response.data.length === 0 ){ //[]
        createUser(values)
      }else {
        alert("Usuario ya existe") 
      }           
    } catch (e) {
      createUser(values)
    }
    // consultar json server a ver si existe ese email
  }

  const handleEdit = (user) => {
    setIsEditing(true)
    formik.setFieldValue("id", user.id)
    formik.setFieldValue("name", user.name)
    formik.setFieldValue("email", user.email)
  }

  const handleDelete = async(id) => {
    await api.delete("/users/"+id)
    alert("Usuario eliminado")
    getUsers()
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.name}>
          <Input hidden value={formik.values.id} />
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
        
        <Button width={['100%', '30%']}  type="submit">{isEditing ? "Editar" : "Crear" }</Button>
      </form>
      <Heading>Lista de usuarios</Heading>
      <Box p={4}>
        {usersList?.map((item) => <Flex key={`users-${item.id}`}>{item.id} - {item.name} - {item.email} <Button onClick={()=>handleEdit(item)}>Editar</Button> <Button onClick={()=>handleDelete(item.id)}>Eliminar</Button></Flex>)}
      </Box>
    </>
  )
}

export default App
