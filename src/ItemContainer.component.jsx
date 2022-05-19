import "./App.css";
import React,{ useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import { TaskItem } from "./TaskItem.component";
import { AddButton } from "./AddButton.component";

//Droppable
export const ItemContainer = ({ column, taskList, userInput }) => {
  const listContainerElement = useRef();
  const _className = column.title.toLowerCase();

  return (
    <>
      <li className={`drag-column ${_className}-column`}>
        <span className="header">
          <h1>{column.title}</h1>
        </span>
        <div
          id={`${_className}-content`}
          className="custom-scroll"
          ref={listContainerElement}
        >
          <Droppable droppableId={column.id}>
            {(provided) => (
              <ul
                {...provided.droppableProps}
                className="drag-item-list"
                id={`${_className}-list`}
                ref={provided.innerRef}
              >
                {(taskList || []).map((item, index) => (
                  <TaskItem
                    value={item.content}
                    key={item.id}
                    dragId={item.id}
                    dragIndex={index}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
        <AddButton column={column} userInput={userInput}/>
      </li>
    </>
  );
};
