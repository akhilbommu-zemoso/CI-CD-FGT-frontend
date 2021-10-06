import React, { useEffect, useState } from 'react'
import { Redirect} from 'react-router-dom'
import { login } from '../utils/index'
function Callback(props) {
    const [loading, setLoading] = useState(false)
    const [customError, setcustomError] = useState(null);
    const loginApi = async (accessToken) => {
        var apiurl = process.env.REACT_APP_BACKEND_USER;
        console.log(accessToken);
       fetch(apiurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then(response => {
            if(!response.ok){
                throw new Error(response.status)
            }
            return response.json();
        })
            .then((data)=>{return data;})
           .then((data) => login(data, accessToken))
            .then(()=>setLoading(true))
                .catch((error) => {
                    if(error.message==="401"){
                        setcustomError("Unauthorized Access");}
                    else if(error.message==="404"){
                        setcustomError("Invalid User");}
                    else if(error.message==="500"){
                        setcustomError("Internal Server Error");}
                    else{
                        setcustomError("Unable to fetch resource")
                    }
                    return <Redirect to="/error" />
                });
    }
    useEffect(() => {
        if (window.location.href.includes("access_token")) {
            var url = new URL(window.location.href);
            var res = url.hash.split("=");
            var accessToken = res[1].slice(0, res[1].length - 6);
            console.log(accessToken);
                loginApi(accessToken);
        }
    })
    const renderRedirect = () => {
        console.log(customError)
        if (customError) {
            const newRoute = `/error?${customError}`
            return <Redirect to={newRoute} />

        }
        else{
            return (loading&&<Redirect to="/dashboard" />)
        }
      }
    return (
        <div>
            {renderRedirect()}
        </div>
    )
}
export default Callback