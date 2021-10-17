import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Select from 'react-select';

const Checkbox = ({label, value, onChange}) => {
  return(
    <label>
      <input type = "checkbox" checked = {value} onChange = {onChange} />
      {label}
    </label>
  )
};

const Vacc = (props) => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [nicc, setNicc] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [vacType, setVacType] = useState("");
    
    
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);

    const handleChangeOne = () => {
      setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
      setCheckedTwo(!checkedTwo);
    };
    

    
    function sendData(event){
      event.preventDefault();
      event.target.reset();
      const newVisitor1 = {
        name,
        nicc,
        location,
        date,
        vacType,
        checkedOne,
        checkedTwo
    }
  
    axios.post("http://localhost:8070/visitorHos/add", newVisitor1).then(() => {
      alert("Details added!!")
    }).catch((err) => {
      alert(err)
    })
    
  }



  const options = [
    {value : 'Asiri Hospital - Amb', label : 'Asiri Hospital - Amb'},
    {value : 'Co-op Hospital - Galle', label : 'Co-op Hospital - Galle'},
    {value : 'Ruhunu Hospital - Galle', label : 'Ruhunu Hospital - Galle'},
    {value : 'Hemas Hospital - Galle', label : 'Hemas Hospital - Galle'},
  ];

  const customStyles = value => ({
    control: (base) => ({
      ...base,
      alignItems: "baseline",
      border: "0px solid black",
      backgroundColor: value ? "gray" : "white"
    })
  });
  
  const options1 = [
    {value : 'Pfizer/BioNtech', label : 'Pfizer/BioNtech'},
    {value : 'SII/Covishield', label : 'SII/Covishield'},
    {value : 'AstraZeneca/AZD1222', label : 'AstraZeneca/AZD1222'},
    {value : 'Moderna', label : 'Moderna'},
    {value : 'Sinopharm', label : 'Sinopharm'},
    {value : 'Sinovac-CoronaVac', label : 'Sinovac-CoronaVac'},
    
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
                    <Select className = "abc" name = "locations" id = "locations" styles = {customStyles} options = {options} onChange = {(event) => {
                        const selectedHos = event.value;
                        setLocation(selectedHos);
                    } }/><br/>
                    
                <label for = "ldate" className = "lbl">Date</label>
                       <input type = "date" id = "vdate" name = "vdate" className = "tf" onChange = {(event) => setDate(event.target.value)}/><br/>

                <label for = "lvactype" className = "lbl">Type of vaccine</label>
                    <Select name = "vacType" id = "vacType" className = "abc" options = {options1} onChange = {(event) => {
                          const selectedVac = event.value;
                          setVacType(selectedVac);
                    } }/><br/>
                    
                {/* <label for = "ldose" className = "lbl">Dose I</label>
                  {/* <input type = "checkbox" id = "dose1" name = "dose1" className = "dos" onChange={this.toggleCheckbox} />Dose1&nbsp;&nbsp; */}
                    {/* <input type = "checkbox" id = "dose1" name = "dose1" className = "dos" value = "first"/> */}


                {/* <label for = "ldose" className = "lbl">Dose II</label> */}
                  {/* <input type = "checkbox" id = "dose2" name = "dose2" className = "dos" onChange={this.toggleCheckbox} />Dose2&nbsp;&nbsp; */}
                    {/* <input type = "checkbox" id = "dose2" name = "dose2" value = "second"/><br/> */} 
                       
                       <div>
                          
                             <Checkbox
                             label = "Dose 1"
                             className = "dos"
                             value = {checkedOne}
                             onChange = {handleChangeOne} 
                             />
                             <Checkbox
                             label = "Dose 2"
                             className = "dos"
                             value = {checkedTwo}
                             onChange = {handleChangeTwo} 
                             />
                             
                          
                          {/* <p>"Value 1" checked? {checked.toString()}</p> */}
                       </div>

                <button type = "submit" name = "subBtn" className = "subBtn">Submit</button><br/>
                <button type = "submit" name = "subUp" className = "subUp">Update</button><br/>
                <button type = "submit" name = "subView" className = "subUp">View</button><br/>
                <button type = "submit" name = "subCan" className = "subCan" onClick = {() => history.push('./')}>Cancel</button>
            </form>
        </div>
    );
  
}


export default Vacc;

