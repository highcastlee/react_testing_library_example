import { Button } from "../Common/Button";
import React from "react";
import styled from 'styled-components';

export default function TodoItem({id, content, completed, onClick}){
  return (
    <Li data-testid={`todo-${id}`} completed={completed}>
      {completed ? (<strike>{content}</strike>) : (<p>{content}</p>)}
      <Button type="button" text="completed" onClick={()=>onClick(id)}/>
    </Li>
  )
}

const Li = styled.li`
  display : flex;
  width: 300px;
  justify-content: space-between;
  background-color: ${props => props.completed && '#abe'};
`