/*import React from 'react';

class CheckBx extends React.Component{
    state = {
        Colornames : {
            Dose1 : false,
            Dose2 : false
        }
    }
        chkClick = (event) => {
            var {name, checked} = e.target;

            this.setState((event) => {
                var selectedDose = e.Colornames;
                return selectedDose[name] = checked;
            });
        
    };

    render()
    {
        return(
            <div>
                <input type = "checkbox" id = "dose1" onChange = {this.CheckBx} name = "Dose1" className = "dos" />Dose1&nbsp;&nbsp;
                <input type = "checkbox" id = "dose2" onChange = {this.CheckBx} name = "Dose2" className = "dos" />Dose2&nbsp;&nbsp;
            </div>
        );
    }
        

}

export default CheckBx;
*/

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';


const Vacc = (props) => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [nicc, setNicc] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [vacType, setVacType] = useState("");
    
    function sendData(event){
      event.preventDefault();
      event.target.reset();
      const newVisitor1 = {
        name,
        nicc,
        location,
        date,
        vacType
      
    }
  
    axios.post("http://localhost:8070/visitorHos/add", newVisitor1).then(() => {
      alert("Details added!!")
    }).catch((err) => {
      alert(err)
    })
    
  }


  const options = [
    {value : 'asiri_hos', label : 'Asiri Hospital - Ambalangoda'},
    {value : 'coop_hos', label : 'Co-op Hospital - Galle'},
    {value : 'ruhunu_hos', label : 'Ruhunu Hospital - Galle'},
    {value : 'hemas_hos', label : 'Hemas Hospital - Galle'},
  ];
  
  const options1 = [
    {value : 'fizer', label : 'Pfizer/BioNtech'},
    {value : 'covishield', label : 'SII/Covishield'},
    {value : 'astraZeneca', label : 'AstraZeneca/AZD1222'},
    {value : 'moderna', label : 'Moderna'},
    {value : 'sinopharm', label : 'Sinopharm'},
    {value : 'sinovac', label : 'Sinovac-CoronaVac'},
    
  ];

    return(
        <div className = "parent">
            <div className = "h1">
                <h2>Details of the Covid - 19 vaccine program</h2>
            </div>
            <form className = "form" onSubmit = {sendData}>
                <label for = "lname" className = "lbl">Name</label>
                <input type = "text" className = "tf" required onChange = {(event) => setName(event.target.value)}/><br/>
                <label for = "lnic" className = "lbl">NIC. No</label>
                <input type = "text" className = "tf" required onChange = {(event) => setNicc(event.target.value)}/><br/>

                <label for = "loc" className = "lbl">Location</label>
                    <select name = "locations" id = "locations" className = "tf" options = {options} onChange = {(event) => {
                        const selectedHos = event.target.value;
                        setLocation(selectedHos);
                    } }/><br/>

                       {/* <option value = "asiri_hos" onChange = {(event) => setLocation(event.target.value)}>Asiri Hospital - Ambalangoda</option> */}
                       {/* <option value = "coop_hos" onChange = {(event) => setLocation(event.target.value)}>Co-op Hospital - Galle</option> */}
                       {/* <option value = "ruhunu_hos" onChange = {(event) => setLocation(event.target.value)}>Ruhunu Hospital - Galle</option> */}
                       {/* <option value = "hemas_hos" onChange = {(event) => setLocation(event.target.value)}>Hemas Hospital - Galle</option> */}
                    
                <label for = "ldate" className = "lbl">Date</label>
                       <input type = "date" id = "vdate" name = "vdate" className = "tf" onChange = {(event) => setDate(event.target.value)}/><br/>

                <label for = "lvactype" className = "lbl">Type of vaccine</label>
                    <select name = "vacType" id = "vacType" className = "tf" options = {options1} onChange = {(event) => {
                          const selectedVac = event.target.value;
                          setVacType(selectedVac);
                    } }/><br/>

                        {/* <option value = "" onChange = {(event) => setVacType(event.target.value)}>Pfizer/BioNtech</option> */}
                        {/* <option value = "" onChange = {(event) => setVacType(event.target.value)}>SII/Covishield</option> */}
                        {/* <option value = "" onChange = {(event) => setVacType(event.target.value)}>AstraZeneca/AZD1222</option> */}
                        {/* <option value = "" onChange = {(event) => setVacType(event.target.value)}>Moderna</option> */}
                        {/* <option value = "" onChange = {(event) => setVacType(event.target.value)}>Sinopharm</option> */}
                        {/* <option value = "" onChange = {(event) => setVacType(event.target.value)}>Sinovac-CoronaVac</option> */}
                    
                <label for = "ldose" className = "lbl">Dose I</label>
                    <input type = "checkbox" id = "dose1" name = "dose1" className = "dos" value = "first"/>
                <label for = "ldose" className = "lbl">Dose II</label>
                    <input type = "checkbox" id = "dose2" name = "dose2" value = "second"/><br/>
                <button type = "submit" name = "subBtn" className = "subBtn">Submit</button><br/>
                <button type = "submit" name = "subUp" className = "subUp">Update</button><br/>
                <button type = "submit" name = "subCan" className = "subCan" onClick = {() => history.push('./')}>Cancel</button>
            </form>
        </div>
    )
}


export default Vacc;