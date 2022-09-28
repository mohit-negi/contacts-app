import React from "react"
import './App.css';

const Personlist = () => {
  const people = [
    {
      img: "22",
      name: "john",
      job: "developer",
      desc: "I am the architect, the heartless entity. Being boss is what i was born for "
    },
    {
      img: "23",
      name: "john",
      job: "sr. developer",
      desc: "I am a nerd, the closet nerd. Being nerd is what i was born for "
    },
    {
      img: "24",
      name: "john",
      job: "jr. developer",
      desc: "I am the , the heartless entity. Being boss is what i was born for "
    }
  ];
  //adding random images url which generates random image for productivity
  return (
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}/>
      <Person person={people[2]}/>
    </section>
  )
}

const Person = (props) => {
  const {img,name,job,desc} = props.person;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="Profile-image"></img>
      <div className="profile-description">
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

const App = () => (<Personlist/>);
export default App;
