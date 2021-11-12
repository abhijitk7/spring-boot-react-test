import React from 'react'
import NavBar from './components/elements/NavBar'
import Timesheets from './components/Timesheet/Timesheets'
import './styles/App.scss'
import { Provider } from 'react-redux';
import  store from './Store';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AddTimeSheet from './components/Timesheet/AddTimeSheet';
import EditTimeSheet from './components/Timesheet/EditTimeSheet';

export default function App() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <div className="py-3">
                <Switch>
                  <Route exact path="/" component={Timesheets}/>
                  <Route exact path="/time/add" component={AddTimeSheet}/>
                  <Route exact path="/time/edit/:id" component={EditTimeSheet}/>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    )
}
