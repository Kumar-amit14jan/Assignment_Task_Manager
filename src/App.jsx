import { useState ,useEffect} from 'react';
import './App.css';
import TaskContainer from './components/taskContainer/taskContainer';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  let [darkMode, setDarkMode] = useLocalStorage("theme", false);
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    setDarkMode(darkMode ? true : false);
  }, [darkMode]);
  return (
    <div className={`appContainer ${darkMode ? "dark" : 'light'}`}>
      <TaskContainer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
