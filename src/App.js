import React from "react"
import './App.css';

const Person = () => {
  return (
    <div>I'm person</div>
  )
}
const Personlist = () => {
  return (
    <Person></Person>
  )
}
const App = () => (<Personlist/>);
export default App;
