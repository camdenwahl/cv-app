import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Comp from './Comp';
import Paper from './Paper';
import Education from './Education';
import Experience from './Experience';

function App() {
  
  const [personal, setPersonal] = useState([
  ]);
  const [education, setEducation] = useState([
  ]);
  const [experience, setExperience] = useState([
  ]);

  const [storeValue, setstoreValue] = useState([{

  }])



  function addNewPersonal(){
    const newPersonal = {
      name: "",
      email: "",
      phoneNumber: "",
      nameID: uuidv4(),
      emailID: uuidv4(), 
      phoneID: uuidv4(),
    };
    setPersonal(prevPersonal => {
      if (prevPersonal.length < 1){
        return [...prevPersonal, newPersonal]
      } else {
        return prevPersonal
      }
    });
    setstoreValue(prevstoreValue => [...prevstoreValue, 
      {id: newPersonal.nameID, value: ""},
      {id: newPersonal.emailID, value: ""},
      {id: newPersonal.phoneID, value: ""},
    ]);
  }

  
  function addNewEducation(){
    const newEducation = {
      schoolName: "",
      titleStudy: "",
      dateStudy: "",
      schoolID: uuidv4(),
      titleID: uuidv4(), 
      dateID: uuidv4(),
    };
    setEducation(prevEducation => [...prevEducation, newEducation]);
    setstoreValue(prevstoreValue => [...prevstoreValue, 
      {id: newEducation.schoolID, value: ""},
      {id: newEducation.titleID, value: ""},
      {id: newEducation.dateID, value: ""},
    ]);
  }

  function addNewExperience(){
    const newExperience = {
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
      companyID: uuidv4(),
      positionID: uuidv4(), 
      respID: uuidv4(),
      startID: uuidv4(),
      endID: uuidv4(),
    };
    setExperience(prevExperience => [...prevExperience, newExperience]);
    setstoreValue(prevstoreValue => [...prevstoreValue, 
      {id: newExperience.companyID, value: ""},
      {id: newExperience.positionID, value: ""},
      {id: newExperience.respID, value: ""},
      {id: newExperience.startID, value: ""},
      {id: newExperience.endID, value: ""},
    ]);
  }

  function handleInput(event) {
    const refreshedInput = {
      id: event.target.id,
      value: event.target.value
    }
    setstoreValue(prevstoreValue => {
      const existingIndex = prevstoreValue.findIndex(obj => obj.id === refreshedInput.id)

      if (existingIndex !== -1) {
        const updatedValues = [...prevstoreValue];
        updatedValues[existingIndex] = refreshedInput;
        return updatedValues;
      } else {
        return [...prevstoreValue, refreshedInput];
      }
    });
  }

  function deleteElement(event) {
    const parentGrab = event.target.parentElement.dataset.index;
    const buttonIdentifier = event.target.id;
    const itemIndex = parseInt(parentGrab, 10);
    if (buttonIdentifier === "Personal"){
      const deletedItem = personal[itemIndex];
      setstoreValue(prevstoreValue => 
        prevstoreValue.filter(obj => 
          obj.id !== deletedItem.nameID && 
          obj.id !== deletedItem.emailID && 
          obj.id !== deletedItem.phoneID
        )
      );
      setPersonal(prevPersonal => 
        prevPersonal.filter((_, index) => index !== itemIndex))
    } else if (buttonIdentifier === "Experience"){
      const deletedItem = experience[itemIndex];
      setstoreValue(prevstoreValue => 
        prevstoreValue.filter(obj => 
          obj.id !== deletedItem.companyID && 
          obj.id !== deletedItem.positionID && 
          obj.id !== deletedItem.respID &&
          obj.id !== deletedItem.startID &&
          obj.id !== deletedItem.endID
        )
      );
      setExperience(prevExperience => 
        prevExperience.filter((_, index) => index !== itemIndex))
    } else if (buttonIdentifier === "Education"){
      const deletedItem = education[itemIndex];
      setstoreValue(prevstoreValue => 
        prevstoreValue.filter(obj => 
          obj.id !== deletedItem.schoolID && 
          obj.id !== deletedItem.titleID && 
          obj.id !== deletedItem.dateID
        )
      );
      setEducation(prevEducation => 
        prevEducation.filter((_, index) => index !== itemIndex))
    }
  }

// HTML
  return (
    <>
      <div id = "layout">
      <button onClick = {addNewPersonal}>Add Personal Information</button>
      {personal.map((comp, index) => (
      <Comp 
        key = {index}
        dataIndex = {index}
        nameID={comp.nameID}
        emailID={comp.emailID}
        phoneID={comp.phoneID}
        grabChange = {handleInput}
        deleteMe={deleteElement}
        />
     ))}
          <button onClick = {addNewEducation}>Add Education</button>
          {education.map((edu, index) => (
      <Education
      key = {index}
      dataIndex = {index}
      schoolID = {edu.schoolID}
      titleID = {edu.titleID}
      dateID = {edu.dateID}
      grabChange={handleInput}
      deleteMe={deleteElement}
      />
     ))}
          <button onClick = {addNewExperience}>Add Professional Experience</button>
          {experience.map((exp, index) => (
      <Experience
      key = {index}
      dataIndex = {index}
      companyID = {exp.companyID}
      positionID = {exp.positionID}
      respID = {exp.respID}
      startID={exp.startID}
      endID={exp.endID}
      grabChange={handleInput}
      deleteMe={deleteElement}
      />
     ))}
      </div>
      <div id = "cv">
      {storeValue.map((unit, index) => (
      <Paper
      key = {index}
      value = {unit.value} 
      />
     ))}
      </div>
    </>
  )
}

export default App
