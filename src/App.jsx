import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)
  const [tareas, setTareas] = useState([{id: 1, texto: "tarea 1"}])
  const [tarea, setTarea] = useState("");
  const [name, setName] = useState("Ana useState");

  useEffect(()=>{
    alert("componente montado")
  }, [])

  useEffect(()=>{
    alert("componente actualizado")
  }, [name])

  const handleAddTask = () => {
    setTareas([...tareas, {id:tareas.length + 1, texto: tarea}])
  }

  return (
    <>
      <h1>LISTA DE TAREAS</h1>
      {
        tareas.map(item => <div key={item.id}>{item.texto}</div>)
      }
      <input type='text' name='tarea' placeholder='tarea' 
        onChange={(e)=>setTarea(e.target.value)}>
      </input>
      <button type='button' onClick={()=>handleAddTask()}>Agregar tarea</button>
    </>
  )
}

export default App
