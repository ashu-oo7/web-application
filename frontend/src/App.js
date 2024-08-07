import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/ChatPage"
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" Component={Homepage} exact />
        <Route path="/chats" Component={Chatpage} />

      </Routes>
    </div>
  );
}

export default App;
