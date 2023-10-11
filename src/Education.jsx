

export default function Education({schoolID, dateID, titleID, grabChange, dataIndex, deleteMe}) {
    return (
      <div data-index = {dataIndex}>
        <button onClick = {(event) => deleteMe(event)} id = "Education">X</button>
        <label htmlFor={schoolID}>School Name</label>
        <input type="text" id = {schoolID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={titleID}>Title of Study</label>
        <input type="text" id = {titleID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={dateID}>Date of Study</label>
        <input type="date" id = {dateID} onChange = {(event) => grabChange(event)}/>
      </div>
    )
  }