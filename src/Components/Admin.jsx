import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from '../components';
import { AdminPage, VideoList, VideoInsert, VideoUpdate } from '../pages';
import Footer from './Footer';

import 'bootswatch/dist/darkly/bootstrap.min.css';
import './Admin.css';

function Admin() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="d-flex justify-content-between">
                <div className="stripes"></div>
                <div className="stripes stripes-right"></div>
            </div>
            <NavBar />
            <Switch>
                <Route path="/admin/videos/list"  component={VideoList} />
                <Route path="/admin/videos/create"  component={VideoInsert} />
                <Route path="/admin/videos/update/:id" component={VideoUpdate} />
                <Route path="/"  component={AdminPage} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Admin;
