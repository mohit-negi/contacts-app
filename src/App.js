import React from "react"
import './App.css';

const Person = () => {
  const url = "https://randomuser.me/api/portraits/thumb/men/89.jpg";
  return (
    <div className="person">
      <img src={url} alt="Profile-image"></img>
      <div className="profile-description">
        <h4>Name</h4>
        <h4>Job description</h4>
      </div>
    </div>
  )
}
const Personlist = () => {
  //adding random images url which generates random image for productivity
  return (
    <Person/>
  )
}
const App = () => (<Personlist/>);
export default App;
