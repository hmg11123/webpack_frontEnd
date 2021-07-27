import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Routes/layouts/Hander";
import content from "../Routes/layouts/Content";

const AppRouter = () => {
 return (
  <Router>
   <Route path="/" component={Header}></Route>
   <Route path="/" component={content}></Route>
  </Router>
 );
};

export default AppRouter;
