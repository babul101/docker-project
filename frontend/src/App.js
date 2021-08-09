import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import MagicEffect from "materialize-css";
import ModalNotes from "./components/ModalNotes";
import StateContext from "./StateContext";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    MagicEffect.AutoInit();
    return () => {};
  }, []);
  // const [response, setResponse] = useState("");
  // const [mongoHealth, setMongoHealth] = useState("fail");

  // useEffect(() => {
  //   const API_URL = process.env.REACT_APP_API_URL || "localhost";
  //   const API_PORT = process.env.REACT_APP_API_PORT || "3001";
  //   const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
  //   console.log("Request on address ", API_BASE_ADDRESS);
  //   const fetchData = async () => {
  //     const result = await axios(`${API_BASE_ADDRESS}/api/test`);
  //     setResponse(result.data);
  //   };
  //   fetchData();
  //   return () => {};
  // }, []);

  // useEffect(() => {
  //   const checkHealth = async () => {
  //     const API_URL = process.env.REACT_APP_API_URL || "localhost";
  //     const API_PORT = process.env.REACT_APP_API_PORT || "3001";
  //     const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
  //     const result = await axios(`${API_BASE_ADDRESS}/api/healthcheck`);
  //     setMongoHealth(result.data.status);
  //   };
  //   checkHealth();
  //   const checkTimer = setInterval(() => checkHealth(), 1000);
  //   return () => {
  //     clearInterval(checkTimer);
  //   };
  // }, []);

  return (
    <StateContext.Provider
      value={{ title, setTitle, description, setDescription }}
    >
      <div className='App'>
        <Navbar />
        <Notes />
        <div className='fixed-action-btn'>
          <a
            href='#modal-add-note'
            className='btn-floating btn-large waves-effect waves-light red modal-trigger'
          >
            <i className='material-icons'>add</i>
          </a>
        </div>
        <ModalNotes />
      </div>
    </StateContext.Provider>
  );
}

export default App;
