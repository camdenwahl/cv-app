//template component to be added, utilizing destructuring and passing props from the obj above
export default function Comp({nameID, emailID, phoneID, grabChange, deleteMe, dataIndex}) {
    
    return (
      <div data-index = {dataIndex}>
        <button onClick = {(event) => deleteMe(event)} id = "Personal">X</button>
        <label htmlFor={nameID}>Name</label>
        <input type="text" id = {nameID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={emailID}>Email</label>
        <input type="email" id = {emailID} onChange = {(event) => grabChange(event)}/>
        <label htmlFor={phoneID}>Phone Number</label>
        <input type="number" id = {phoneID} onChange = {(event) => grabChange(event)}/>
      </div>
    )
  }