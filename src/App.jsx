import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App(props) {
  const [count, setCount] = useState(0)
  const [tareas, setTareas] = useState([{id: 1, texto: "tarea 1"}])
  const [tarea, setTarea] = useState("");
  const [name, setName] = useState("Ana useState");

  useEffect(()=>{
    //alert("componente montado")
  }, [])

  useEffect(()=>{
   // alert("componente actualizado")
  }, [name])

  const handleAddTask = () => {
    setTareas([...tareas, {id:tareas.length + 1, texto: tarea}])
  }

  return (
    <>
      <h1>HOME</h1>
    </>
  )
}

export default App
