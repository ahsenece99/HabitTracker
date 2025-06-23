import { useEffect, useState } from "react";
import { useTodoStore } from "../store/todoStore";
import { applyDarkMode } from "../utils/theme";
import "../css/Settings.css";

function Settings() {
  const clearTodos = useTodoStore((state) => state.clearTodos);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; 
  });

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode]);

  const handleClearAll = () => {
    if (
      window.confirm("Are you sure you want to delete ALL tasks? This cannot be undone.")
    ) {
      clearTodos();
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>⚙️ App Preferences</h3>
        <div className="switch-container">
          <span>Dark Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => {
                const newVal = !darkMode;
                setDarkMode(newVal);
                localStorage.setItem("darkMode", newVal.toString()); 
              }}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>🌐 Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-dropdown"
        >
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
        </select>
      </div>

      <div className="settings-section">
        <h3>🧹 Clear All Data</h3>
        <p>This action is <b>irreversible</b>, please proceed with caution.</p>
        <button className="btn" onClick={handleClearAll}>
          Clear All Tasks
        </button>
      </div>

      <div className="app-info">
        <p>Habit Tracker App v1.0</p>
        <p>Made by Ahsen</p>
      </div>
    </div>
  );
}

export default Settings;
