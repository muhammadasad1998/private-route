import React, { useState } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { todosData } from "../../utils/TodosData";
import TodosCard from "./TodosCard";
import { Link } from "react-router-dom";
import { Container } from "postcss";
import Input_Components from "../Input_Component/Input_Components";



const ToDo_Component = () => {
    const [todos, setTodos] = useState(todosData);
    const [value, setValue] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [todosShow, settodosShow] = useState(true);
  
  const onChangeHandle = (e) => {
    if (e.target.id == "todo") {
      const value = e.target.value;
      setValue(value);
    } else if (e.target.id == "todoDesc") {
      const value = e.target.value;
      setDescription(value);
    }
    console.log(value);
  };

  const onSubmitHandle = () => {
    if (!value) return;
    addTodo({ text: value, description }); // Pass both text and description
    setValue("");
    setDescription("");
  };
  const addTodo = ({ text, description }) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, { text, description, isCompleted: false }];
      console.log("Add To DO Clicked", newTodos);
      return newTodos;
    });
  };
  const completeTodo = (current_ind) => {
    setTodos((prevTodos) => {
        const newTodos = [...prevTodos];
        newTodos[current_ind].isCompleted = true;
        return newTodos;
      });
  };

 
  const deleteTodo = (current_ind) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(current_ind, 1);
      return newTodos;
    });
  };
  return (
      <>
        <Stack justifyContent="center" alignItems="center" className="h-screen">
        <Button sx={{my:2}} variant="outlined" color="warning" onClick={()=>settodosShow(!todosShow)}>{todosShow ? 'See Todos' : 'Add Todo'}</Button>

      {todosShow ?
      (
        <Paper
          className="max-w-sm"
          elevation={24}
          sx={{ p: 2, borderRadius: 5 ,textAlign:"center"}}
        >
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Add Todo
          </Typography>
          <Input_Components
            onChange={onChangeHandle}
            type="text"
            id="todo"
            label="Todo Title"
            placeholder="Enter your Todo Title"
            value={value}
          />
          <Input_Components
            onChange={onChangeHandle}
            type="text"
            id="todoDesc"
            label="Todo Description"
            placeholder="Enter your Todo Description"
            value={description}
          />
          <Button
            onClick={onSubmitHandle}
            variant="contained"
            fullWidth
            color="success"
            sx={{mt:2}}
          >
            Add
          </Button>
        </Paper>
    ):(
      
      <div className="container mx-auto">
        <Typography textAlign="center" variant="h3" mb={5}>
          Todos
        </Typography>
            <TodosCard todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        </div>
        )
}
        </Stack>
      
        {/* {todos.map((current_obj, current_index) => {
          const { text, description } = current_obj;
          return <h1>{text}</h1>;
        })} */}
    </>
  );
};

export default ToDo_Component;
