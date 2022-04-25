import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
