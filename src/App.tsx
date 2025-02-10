import useDarkMode from "@hooks/useDarkMode.js";
import './App.css'

function App() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <>
      <button
        onClick={toggleTheme}
        className="px-4 py-2"
      >
        Toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </>
  )
}

export default App
