import React from 'react';
import DashboardNav from '../../ui/DashboardNav/DashboardNav'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from '../../ui/Dashboard/Dashboard'
import Footer from '../../ui/Footer/Footer'
import Form from '../../ui/Forms/InternshipForm/Form'
import JobForm from '../../ui/Forms/JobForm/JobForm'
import AllJobsPage from '../../ui/AllJobsPages/AllJobsPage'
import JobDetailPage from '../../ui/JobDetailPage/JobDetailPage'
const Employeer = () => {
  return (
    <BrowserRouter>
      <DashboardNav />
      <Switch>
        <Route exact path="/dashboard/" component={Dashboard} />
        <Route
          exact
          path="/dashboard/post-internship/"
          component={Form}
        />
        <Route
          exact
          path="/dashboard/post-job/"
          component={JobForm}
        />
          <Route
          exact
          path="/dashboard/employer/applications/:id"
          component={AllJobsPage}
        />
        <Route
          exact
          path="/dashboard/application_detail/:id"
          component={JobDetailPage}
        />
        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Employeer;
