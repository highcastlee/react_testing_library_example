import { useRef, useState } from 'react';

import { Button } from '../Common/Button';
import React from "react";
import TodoItem from "./TodoItem";
import styled from 'styled-components';

export default function Todo({todo}){
  const [todoList, setTodoList] = useState(todo)
  const ref = useRef(null);

  const addItem = () => {
    if(!ref.current) return
    const newId = todoList[todoList.length-1].id+1;
    const newItem = {id : newId, content:ref.current.value, completed:false };
    setTodoList([...todoList, newItem]);
    ref.current.value='';
  }

  const completeItem = (id) => {
    setTodoList(todoList.map(item=>{
      if(item.id===id) item.completed=!item.completed
      return item
    }));
  }

  return (
    <div>
      <input ref={ref} type='text'/>
      <Button type='button' onClick={addItem} text='추가'/>
      <Ul>
      {todoList.length && todoList.map(({id,content,completed})=>{
        return <TodoItem key={id} id={id} content={content} completed={completed} onClick={completeItem}/>
      })}
      </Ul>
    </div>
  )
}

const Ul = styled.ul`
  list-style : none;
`