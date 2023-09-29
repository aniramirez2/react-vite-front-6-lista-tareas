import React from 'react'
import { useParams } from 'react-router-dom'

const UsersDetails = () => {
    const {id, nombre} = useParams();
  return (
    <div>UsersDetails este es el usuario {nombre} con id {id}</div>
  )
}

export default UsersDetails