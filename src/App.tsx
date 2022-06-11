import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Post from "./Components/Post/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/posts' element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
