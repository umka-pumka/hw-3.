import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./Components/Header/Header";
import Component from "./Components/Component/Component";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<Header />} />

          <Route path="/component1" element={<Component />} />
          <Route path="/component2" element={<Component />} />
          <Route path="/component3" element={<Component />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
