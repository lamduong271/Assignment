import React from "react";
import Login from "./Components/Login/Login";
import PostReader from "./Components/PostReader/PostReader";
import { AppContextProvider, useAppContext } from "./Services/app-context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { slToken } = useAppContext();
  const localslToken = localStorage.getItem("slToken");
  const auth = slToken || localslToken;

  return auth ? <PostReader /> : <Navigate to='/' />;
};

const Components = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/posts' element={<ProtectedRoutes />} />
          <Route path='/posts/:sender' element={<ProtectedRoutes />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

function App() {
  return (
    <AppContextProvider>
      <Components />
    </AppContextProvider>
  );
}

export default App;
