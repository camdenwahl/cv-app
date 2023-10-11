

export default function Experience({companyID, positionID, respID, startID, endID, grabChange, dataIndex, deleteMe}) {
    return (
      <div data-index = {dataIndex}>
        <button onClick = {(event) => deleteMe(event)} id = "Experience">X</button>
        <label htmlFor={companyID}>Company Name</label>
        <input type="text" id = {companyID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={positionID}>Position Title</label>
        <input type="text" id = {positionID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={respID}>Responsibilities</label>
        <input type="text" id = {respID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={startID}>Start Date</label>
        <input type="date" id = {startID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={endID}>End Date</label>
        <input type="date" id = {endID} onChange = {(event) => grabChange(event)}/>
        
      </div>
    )
  }