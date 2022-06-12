import React from "react";
import Login from "./Components/Login/Login";
import Post from "./Components/PostReader/PostReader";
import { AppContextProvider, useAppContext } from "./Services/app-context";

const Components = () => {
  const { slToken } = useAppContext();
  const localslToken = localStorage.getItem("slToken");
  return (
    <React.Fragment>
      {slToken || localslToken ? <Post /> : <Login />}
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
