import { Container, List, speedDialIconClasses } from "@mui/material";  
import React, { useState } from "react";
import Form from "../components/Form";
import ListItens from "../components/ListItens";
import {tarefasApi} from "../utils/tarefas.api";
 

export default function Home() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos ([...todos, todo]);
    }

    const deleteTodo = (id) => {
       var filtered = todos.filter((todo) => todo.id !== id);
       setTodos(filtered);
     };

     const editTodo = (id, editedText) => {
        var tarefas = [...todos];

        for (var i in tarefas) {
            if (tarefas[i].id == id) {
                tarefas[i].text = editedText;
            }
        }

        
        setTodos(tarefas);
     }

    // const [todo, setTodo = useState([]);
    // const [envio, setEnvio] = useState();
    // const [search, setSearch] = useState("");
    // const [modaIsOpen, setModalIsOpen] = useState(false);
    // const [uniqueTarefas, setUniqueTarefas] = useState({
    //   id: 0,
    //   tarefa: "",
    //       });
  
    //       async function findTarefasId(id) {
    //         openModal();
    //         const tarefasById = await tarefasApi.getTarefasById(id);
    //         console.log(tarefasById);
    //         setUniqueTarefas(tarefasById);
    //       }
        
    //       async function getTarefas() {
    //         const allTarefas = await tarefasApi.getAllTarefas();
    //         setTarefas(allTarefas);
    //         setEnvio(false);
    //       }
    //       useEffect(() => {
    //         getTarefas();
    //       }, [envio]);

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} /> 
      <List sx={{ marginTop: "1em" }}>
        {todos.map ((todo) => ( 
            <div key={todo.id} style={{ marginTop: "1em"}}> 
                <ListItens editTodo={ editTodo } todo={ todo } deleteTodo={ deleteTodo } />
            </div>
              ))}
      
      </List>
           
    </Container>
  )
}
