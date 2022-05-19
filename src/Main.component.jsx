import "./App.css";
import { ItemContainer } from "./ItemContainer.component";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";

export const Main = () => {
  const [initialState, setInitialState] = useState(initialData);

  const dragEndHandler = (result) => {
    let newState;
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const startColumn = initialState.columns[source.droppableId];
    const finishColumn = initialState.columns[destination.droppableId];
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1); // <-- From Index remove one item, mutate current array
      newTaskIds.splice(destination.index, 0, draggableId); //<-- Start from Dest Ids insert draggable id

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      newState = {
        ...initialState,
        columns: {
          ...initialState.columns,
          [newColumn.id]: newColumn,
        },
      };
      setInitialState(newState);
      return;
    }

    //Moving from one column to another
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    newState = {
      ...initialState,
      columns: {
        ...initialState.columns,
        [newStartColumn.id]: newStartColumn,  // <-- Included columns with updated task ids
        [newFinishColumn.id]: newFinishColumn,
      },
    };
    setInitialState(newState);
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <h1 className="main-title">Kanban Board</h1>
      <div className="drag-container">
        <ul className="drag-list">
          {initialState.columnOrder.map((columnId) => {
            const column = initialState.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => initialState.tasks[taskId]
            );
            return (
              <ItemContainer key={column.id} column={column} taskList={tasks} userInput={setInitialState}/>
            );
          })}
        </ul>
      </div>
    </DragDropContext>
  );
};
