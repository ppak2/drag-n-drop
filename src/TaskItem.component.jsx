import "./App.css";
import { Draggable } from "react-beautiful-dnd";
import React, { useRef } from "react";

//Draggable
export const TaskItem = React.memo(({ value, dragId, dragIndex }) => {
  const liElem = useRef();

  return (
    <>
      <Draggable draggableId={dragId} index={dragIndex}>
        {(provided, snapshot) => (
          <li
            className="drag-item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={(el) => {
              liElem.current = el;
              provided.innerRef(el);
            }}
          >
            {!liElem.current
              ? null
              : snapshot.isDragging
              ? liElem.current.classList.add("item-over")
              : liElem.current.classList.remove("item-over")}
            {value}
          </li>
        )}
      </Draggable>
    </>
  );
});
