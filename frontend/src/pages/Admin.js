import React from 'react';
import {useHistory} from 'react-router-dom';

import adminLogo from '../images/b.png';

<link rel = "stylesheet" href = "admin.css"/>

const Admin = (props) => {
    const history = useHistory();

    return(
        <div className = "adForm">
       <body1>   
           <form className = "containerAdmin" id = "login-form">
               <div className = "head">
               <h1 style = {{textAlign: 'center'}}>Admin Login</h1>
               </div>
               <div className = "imagecontainer">
                   <img src = {adminLogo} alt = "" width = {150} height = {150}/>
               </div>
               <div>
                   <input className = "user1" id = "userfield" type = "text" placeholder = "user name" required/> 
               </div>
               <div>
                   <input className = "pass1" id="passwordfield" type="password" placeholder="password" name="password" required/>
               </div>
               <div className="second">
                  <div>
                     <button id = "login-form-login" name ="loginbtn" type ="submit" className ="lbtn1" onClick = {() => history.push('./Vacc')}><b>Login</b></button> 
                  </div>
                     <button id = "login-form-cancel" name ="cancelbtn" type ="submit" class="btn2" onClick = {() => history.push('./')}><b>Cancel</b></button>
                  <div>
                     
                  </div>
               </div>

           </form>
       </body1>

       </div>
    )
}

export default Admin;

        
        