import React from 'react'
import LandingPage from '../components/LandingPage'
import { Route } from 'react-router-dom'
function Routes() {
    return (
        <div>
            <Route path="/dashboard/myaccount"><h1>Welcome to my account</h1></Route>
            <Route path="/dashboard/profile"><h1>Welcome to my Profile</h1></Route>
            <Route path="/dashboard/home"><LandingPage /></Route>
            <Route path="/dashboard/satistics"><h1>Welcome to statistics</h1></Route>
            <Route path="/dashboard/bank"><h1>Welcome to bank account</h1></Route>
            <Route path="/dashboard/transactions"><h1>Welcome to bank transactions</h1></Route>
            <Route path="/dashboard/track"><h1>Welcome to track</h1></Route>
            <Route path="/dashboard/wallet"><h1>Welcome to wallet</h1></Route>
            <Route path="/profile"><h1>Welcome to Profile</h1></Route>
        </div>
    )
}
export default Routes