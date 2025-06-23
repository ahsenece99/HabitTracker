import { useEffect } from "react";
import { useTodoStore } from "../store/todoStore";
import "../css/Tasks.css";

function Tasks() {
  const { todos, toggleTodo, deleteTodo, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  const groupedTodos = Object.entries(
    todos.reduce<Record<string, typeof todos>>((acc, todo) => {
      const dateObj = new Date(todo.date);
      const todayObj = new Date();
      todayObj.setHours(0, 0, 0, 0);
      dateObj.setHours(0, 0, 0, 0);

      let dateStr: string;

      if (dateObj.getTime() === todayObj.getTime()) {
        dateStr = "Today";
      } else if (dateObj.getFullYear() === todayObj.getFullYear()) {
        dateStr = dateObj.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          weekday: "long",
        });
      } else {
        dateStr = dateObj.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }

      if (!acc[dateStr]) acc[dateStr] = [];
      acc[dateStr].push(todo);
      return acc;
    }, {})
  ).sort(([dateA], [dateB]) => {
    if (dateA === "Today") return -1;
    if (dateB === "Today") return 1;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  const handleDeleteWithFade = (id: string) => {
    const taskItem = document.getElementById(`task-${id}`);
    if (taskItem) {
      taskItem.classList.add("fade-out");
      setTimeout(() => {
        deleteTodo(id);
      }, 300);
    }
  };

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2>My Tasks</h2>
        <p>{todos.length} total tasks</p>
      </div>

      {todos.length === 0 ? (
        <div className="empty-state">
          <p>You haven't added any tasks yet.</p>
        </div>
      ) : (
        groupedTodos.map(([date, tasks]) => (
          <div key={date} className="date-group">
            <div className="date-header">
              <span role="img" aria-label="calendar">📅</span>
              {date}
            </div>
            <ul className="task-list">
              {tasks.map((todo) => (
                <li id={`task-${todo.id}`} key={todo.id} className="task-item">
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className={`task-title ${todo.completed ? "completed" : ""}`}>
                    {todo.title}
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteWithFade(todo.id)}
                    aria-label="Delete task"
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Tasks;
