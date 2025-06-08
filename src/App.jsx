import { useState ,useEffect} from 'react';
import './App.css';
import TaskContainer from './components/taskContainer/taskContainer';

function App() {
  let [darkMode, setDarkMode] = useState('');
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <div className={`appContainer ${darkMode ? "dark" : 'light'}`}>
      <TaskContainer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
