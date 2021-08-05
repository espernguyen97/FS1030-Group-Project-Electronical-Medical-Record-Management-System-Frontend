import React, { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import Caregivers from './components/pages/CareGivers'
import SubmitTicket from './components/pages/SubmitTicket'
import TicketList from './components/pages/Tickets'
import Patients from './components/pages/Patients'
import EditPatient from './components/pages/EditPatient'
import ViewPatient from './components/pages/ViewPatient'
import UserProfile from './components/pages/UserProfile'
import EditUser from './components/pages/EditUser'
import ViewPatientMedicalHistory from './components/pages/ViewPatientMedicalHistory'
import EditTicket from './components/Ticket_System/Ticket_Profile'
import PrivateRoute from './components/shared/PrivateRoute'
import NotFound from './components/404';
import SideNav from './components/shared/SideNav'
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  const [token, setToken] = useState(false)
  const [user, setUser] = useState(false)

  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
    setUser(JSON.parse(sessionStorage.getItem('currentUser')))
  }, []) //I added this effect to prevent any window refresh from resetting the states above back to their default false values. SW

  return (
   <BrowserRouter>
        <CssBaseline />
        <Navigation user={user}/>
        <Switch>
          <Route exact path="/login">
            <Login setToken={setToken} setUser={setUser}/>
          </Route>
          <PrivateRoute>
            <SideNav token={token} setToken={setToken} setUser={setUser}/>
            <PrivateRoute component={Listing} exact path="/submissions" />
            <PrivateRoute component={SubmitTicket} exact path="/submit_ticket" />
            <PrivateRoute component={TicketList} exact path="/tickets" />
            <PrivateRoute component={Patients} exact path="/patients" />
            <PrivateRoute component={ViewPatient} exact path="/patient/:id" />
            <PrivateRoute component={EditPatient} exact path="/edit-patient/:id" /> 
            <PrivateRoute component={UserProfile} exact path="/user-profile/:id" />
            <PrivateRoute component={Caregivers} exact path="/caregivers" />
            <PrivateRoute component={EditUser} exact path="/edit-user/:id" />
            <PrivateRoute component={ViewPatientMedicalHistory} exact path="/medical_history/:id" />
            <PrivateRoute component={EditTicket} exact path="/tickets/entries/:id" />            
          </PrivateRoute>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
