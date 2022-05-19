const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Backlog Testing1" },
    "task-2": { id: "task-2", content: "Backlog Testing2" },
    "task-3": { id: "task-3", content: "Backlog Testing3" },
	  "task-4": { id: "task-4", content: "Backlog Testing4" },
    "task-5": { id: "task-5", content: "Progress Testing1" },
    "task-6": { id: "task-6", content: "Progress Testing2" },
    "task-7": { id: "task-7", content: "Complete Testing1" },
    "task-8": { id: "task-8", content: "Complete Testing2" },
    "task-9": { id: "task-9", content: "On-hold Testing1" },
    "task-10": { id: "task-10", content: "On-hold Testing2" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Progress",
      taskIds: ["task-5", "task-6"],
    },
    "column-3": {
      id: "column-3",
      title: "Complete",
      taskIds: ["task-7", "task-8"],
    },
    "column-4": {
      id: "column-4",
      title: "On-hold",
      taskIds: ["task-9", "task-10"],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
};

export default initialData;
