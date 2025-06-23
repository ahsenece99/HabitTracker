import { useTodoStore } from "../store/todoStore";
import "../css/Progress.css";

function Progress() {
  const todos = useTodoStore((state) => state.todos);

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-container">
      <h2>Your Progress</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">📝 Total Tasks</div>
          <div className="stat-value">{total}</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">✅ Completed</div>
          <div className="stat-value">{completed}</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">⏳ Pending</div>
          <div className="stat-value">{pending}</div>
        </div>
      </div>

      <div className="completion-rate">
        <div className="stat-label">📈 Completion Rate</div>
        <div className="stat-value">{completionRate}%</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Progress;