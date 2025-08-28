import "./../../src/App.css";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "3px 5px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
        background: darkMode ? "#eee" : "#333",
      }}
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;
