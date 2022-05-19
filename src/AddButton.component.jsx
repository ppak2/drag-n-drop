import "./App.css";
import { useState, useRef } from "react";

var id = 11;

export const AddButton = ({ userInput, column }) => {
  const [showInputBox, setShowInputBox] = useState(false);
  const textInput = useRef();

  const handleSaveInput = () => {
    userInput(prev => {
    const text = textInput.current.textContent;
    const newTask = {[`task-${id}`]: {id: `task-${id}`, content: `${text}`}};
    const newTasks = {...prev.tasks, ...newTask};

    const newColumn = prev.columns[column.id];

    newColumn.taskIds = [...column.taskIds, `task-${id}`];
    const newColumns = {...prev.columns, [newColumn.id]: newColumn};

    const newState = {...prev, tasks: newTasks, columns: newColumns};
    id++;
    return newState;
    });
  };

  const toggleShowInput = () => setShowInputBox(prev => !prev);

  return (
    <>
      <div className="add-btn-group">
        {!showInputBox && (
          <div
            className="add-btn"
            onClick={toggleShowInput}
          >
            <span className="plus-sign">+</span>
            <span>Add Item</span>
          </div>
        )}
      </div>
      {showInputBox && (
        <div>
          <div className="add-btn-group">
            <div className="add-btn solid" onClick={() => {
              handleSaveInput();
              toggleShowInput();
            }}>
              <span>Save Item</span>
            </div>
          </div>
          <div className="add-container">
            <div className="add-item" contentEditable="true" ref={textInput}></div>
          </div>
        </div>
      )}
    </>
  );
};
