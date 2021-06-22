import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import ProjectList from "./ProjectList";
import ViewProject from "./ViewProject";
import EditProject from "./EditProject";
import NewProject from "./NewProject";
import "./styles/root.scss";


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
        <Route exact path="/">
          <ProjectList />
        </Route>

        <Route exact path={`/projects/:projectId`}>
          <ViewProject />
        </Route>

        <Route exact path={`/projects/:projectId/edit`}>
          <EditProject />
        </Route>

        <Route exact path={`/new`}>
          <NewProject />
        </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
