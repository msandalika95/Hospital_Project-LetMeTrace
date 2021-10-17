import React, {useState} from 'react';
import axios from 'axios';


const Home = () => {
   
    
    const [nic, setNic] = useState("");
    const [telnumber, setTelNumber] = useState("");
    
    function sendData(event){
      event.preventDefault();
      event.target.reset();
      const newVisitor = {
        nic,
        telnumber      
      }
    axios.post("http://localhost:8070/visitorHos/add", newVisitor).then((res) => {
      alert("visitor added!!")
      saveMessage(res);
    }).catch((err) => {
      alert(err)
    })

    function saveMessage(res) {
      console.log(`Saved`,res);
    }
    
  }
    return(
      
    <div className = "loginBody">
    <body1>
         <form className = "container" id = "login-form" onSubmit = {sendData}>
             
             <div>
                 <input className = "nic" id = "userfield" type = "text" placeholder = "Enter your NIC number" required onChange = {(event) => 
                setNic(event.target.value)}/> 
             </div>
             <div>
                 <input className = "telnumber" id="passwordfield" type="text" placeholder="Enter your mobile number" name="password" required onChange = {(event) => {
                   setTelNumber(event.target.value)
                 }}/>
             </div>
             <div className="second">
                <div>
                   <button id = "login-form-login" name ="loginbtn" type ="submit" className ="btn1"><b>ENTER</b></button> 
                </div>
             </div>

         </form>
     </body1>
     </div>
    
    );
}

export default Home;