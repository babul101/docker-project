import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  const [mongoHealth, setMongoHealth] = useState("fail");

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "localhost";
    const API_PORT = process.env.REACT_APP_API_PORT || "3001";
    const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
    console.log("Request on address ", API_BASE_ADDRESS);
    const fetchData = async () => {
      const result = await axios(`${API_BASE_ADDRESS}/api/test`);
      setResponse(result.data);
    };
    fetchData();
    return () => {};
  }, []);

  useEffect(() => {
    const checkHealth = async () => {
      const API_URL = process.env.REACT_APP_API_URL || "localhost";
      const API_PORT = process.env.REACT_APP_API_PORT || "3001";
      const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
      const result = await axios(`${API_BASE_ADDRESS}/api/healthcheck`);
      setMongoHealth(result.data.status);
    };
    checkHealth();
    const checkTimer = setInterval(() => checkHealth(), 1000);
    return () => {
      clearInterval(checkTimer);
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload to enhance the coding
          .
        </p>

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          the response is {response}
        </a>
      </header>
      <h4>
        {mongoHealth === "fail"
          ? "Mongodb connection fail"
          : "Mongodb connection was successful"}
      </h4>
    </div>
  );
}

export default App;
