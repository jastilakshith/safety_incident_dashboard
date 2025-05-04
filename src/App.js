import { useState, useEffect, useRef } from 'react';
import './App.css';
import ListContainer from './components/ListContainer';

function App() {

  const [sortOrder,setSortOrder]=useState(null);
  const [filterOrder,setFilterOrder]=useState(null);
  const [lightDarkButton,setLightDarkButton]=useState("light");
  const nameinputRef = useRef(null);
  const descriptionRef=useRef(null);
  const [formSelect,setFormSelect]=useState("Low");
  const [formerrors,setFormErrors]=useState('');

  const [showForm, setShowForm] = useState(false);
  const [newIncident,setNewIncident]=useState(null);
  const [addedIncident,setAddedIncident]=useState(false);

  const handleClick = () => {
    setShowForm(true); // Show the form when button is clicked
  };

  const handleClose = () => {
    setShowForm(false); // Close the form
  };

  function lightDarkButtonHandler(){
    if(lightDarkButton==="light"){
      setLightDarkButton("dark");
    }
    
    else if(lightDarkButton==="dark"){
      setLightDarkButton("light");
    }
  }

  function sortChangeHandler(e){
     setSortOrder(e.target.value);
  }

  function filterChangeHandler(e){
    setFilterOrder(e.target.value);
  }

  function handleSubmit(e){
    let today = new Date();
    today = today.toISOString().split('T')[0];
    e.preventDefault();
    setAddedIncident(true);
    setNewIncident({
      id:10,
      title:nameinputRef.current.value,
      description:descriptionRef.current.value,
      severity:formSelect,
      report_date: today
    });

  }

  function formSelectHandler(e){
    setFormSelect(e.target.value);
  }

 useEffect(() => {
  if (lightDarkButton === 'light') {
    document.body.style.backgroundColor = 'white';
  }
  else if (lightDarkButton === 'dark') {
    document.body.style.backgroundColor = 'grey';
  }
}, [lightDarkButton]);

  return (
    <div className={lightDarkButton==="light"?"Applight":"Appdark"}>

    {showForm && (
      <div className="form-modal">
        <div className={`form-content${lightDarkButton}`}>
          <h2 className={`formh1${lightDarkButton}`}>Enter the incident details</h2>
            <input type="text" ref={nameinputRef} placeholder="Title" />
            <textarea placeholder='Description...' ref={descriptionRef}></textarea>
            <br />
            <span className={`formspan${lightDarkButton}`}>Severity:</span>
            <select className={`formselect formselect${lightDarkButton}`} onChange={formSelectHandler}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            </select>
            <br />
            <span className={`${formerrors==="Title and description are required!"?"submiterror":"submitsuccess"}${lightDarkButton}`}>{formerrors}</span>
            <button className={`formbuttons formbuttons${lightDarkButton}`} type="submit" onClick={handleSubmit}>Submit</button>
          <button className={`formbuttons formbuttons${lightDarkButton}`} onClick={handleClose}>Close</button>
        </div>
      </div>
    )}

    <h1>AI Safety Incident Dashboard</h1>
    <div className="utilitiescontainer">
      <div className="sortcontainer">
        <h3>Sort by: </h3>
     <select className={`sortingselect utilitybuttons${lightDarkButton}`} onChange={sortChangeHandler}>
        <option>Default</option>
        <option value="Newestfirst">Newest first</option>
        <option value="Oldestfirst">Oldest first</option>
      </select>
      </div>
      <div className="filtercontainer">
        <h3>Filter: </h3>
      <select className={`filterselect utilitybuttons${lightDarkButton}`} onChange={filterChangeHandler}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      </div>
      <button className={`reportbutton${lightDarkButton}`} onClick={handleClick}>Report an incident</button>
      <button className={`lightdarktogglebutton${lightDarkButton}`} onClick={lightDarkButtonHandler}>{lightDarkButton}</button>
    </div>
    <ListContainer sortOrder={sortOrder} filterOrder={filterOrder} lightDarkButton={lightDarkButton} newIncident={addedIncident? newIncident:false} setShowForm={setShowForm} setFormSelect={setFormSelect} setFormErrors={setFormErrors}/>
    </div>
  );
}

export default App;

