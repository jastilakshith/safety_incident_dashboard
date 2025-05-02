import React, {useState, useEffect} from 'react';
import '../App.css';
import listdata from '../list';

export default function ListContainer({sortOrder, filterOrder, lightDarkButton, newIncident,setShowForm,setFormSelect,setFormErrors}) {
  const [list, setList] = useState(listdata);
  const [finalList,setFinalList]=useState(list);
  const [description, setDescription] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null); 
  const [listClass,setListClass]=useState(null);
  const [buttonValue,setButtonValue]=useState(null);
  const [buttonClass,setButtonClass]=useState(null);


  useEffect(() => {
    if (newIncident !== false) {
      if(newIncident.title===""||newIncident.description===""){
        setFormErrors("Title and description are required!");
      }
      else{
      setList((prevList) => [...prevList, newIncident]);
      setFormErrors("Success!");
      setTimeout(()=>{
        setShowForm(false);
        setFormSelect("Low");
        setFormErrors('');
      },2000);
      }
    }
    
  }, [newIncident,setShowForm,setFormSelect,setFormErrors]); 
  
 

  useEffect(() => {
    let updatedllist=[...list];
    if (sortOrder === "Newestfirst") {
      updatedllist=([...list].sort((a, b) => new Date(b.report_date) - new Date(a.report_date)));
      
    } 
    else if (sortOrder === "Oldestfirst") {
      updatedllist=([...list].sort((a, b) => new Date(a.report_date) - new Date(b.report_date)));
     
    } 
    

    if (filterOrder === "Low") {
      updatedllist=(updatedllist.filter(issue => issue.severity === "Low"));
    } 
    else if (filterOrder === "Medium") {
      updatedllist=(updatedllist.filter(issue => issue.severity === "Medium"));
    } 
    else if (filterOrder === "High") {
      updatedllist=(updatedllist.filter(issue => issue.severity === "High"));
    }

    setFinalList(updatedllist);

  }, [sortOrder, filterOrder,list]);


  function handleClick(index, itemDescription) {

    if (expandedItem === index) {
      setExpandedItem(null); 
    } else {
      setExpandedItem(index); 
      setDescription(itemDescription);
      setButtonValue("Hide");
      setButtonClass("buttonclicked");
      setListClass("listexpanded");
    }
  }


  return (
    <div className='listcontainer'>
      {finalList.map((item, index) => (
        <li key={index} className={`${expandedItem === index ? listClass : 'listcollapsed'}${lightDarkButton}`}>
          <div className="listtopcontainer">
            <h2>{item.title}</h2>
            <div className="listsubcontainer">
            <h4 style={{
              color: item.severity === "Low" ? "green" : item.severity === "Medium" ? "#ebb81c" : item.severity === "High" ? "red" : "black"
            }}>
              Severity: {item.severity}
            </h4>
            <h4>Reported Date: {item.report_date}</h4>
            <button className={`${expandedItem === index ? buttonClass : 'buttonunclicked'}${lightDarkButton}`} onClick={() => handleClick(index, item.description)}>{expandedItem === index? buttonValue:"View"}</button>
            </div>
          </div>
          {expandedItem === index && <div className='description'><p><h4>Description:</h4>{description}</p></div>}
        </li>
      ))}
    </div>
  );
}

