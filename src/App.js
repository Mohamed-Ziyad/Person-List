import React from 'react';
import './App.css';



const App = () => (<PersonList />) 

const PersonList= ()=>{
  const People =[
    {
      img:22,name:'John',job:'developer'
    },
    {
      img:34,name:'Ann',job:'designer'
    },
    {
      img:56,name:'Saman',job:'Programmer'
    }
  ];

  return (<section>
    <Person person={People[0]}/>;
    <Person person={People[1]}/>;
    <Person person={People[2]}/>;
  </section>)
}

const Person = (props) => {
  const {img,name,job}=props.person;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  
  
  
  return(
    <div className="person">
    <img src={url} alt=""/>
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
    </div>
     </div>
  )
}


export default App;
