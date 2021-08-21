/*eslint-disable*/ 

import logo from './logo.svg';
import {Navbar, Nav, Form, Button, FormControl, Jumbotron} from 'react-bootstrap'
import './App.css';
import CollectionData from './data'
import React, {useState} from 'react'


function App() {

  let [art, setArt] = useState(CollectionData);

  return (
    <div className="App">

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Design Collection</Navbar.Brand>

    </Navbar>

    <Jumbotron className = "background">
    <h1>Hello, JoyCoding!</h1>
    <p>
    Let it go, let it go Can't hold it back anymore Let it go, let it go Turn away and slam the door
  I don't care what they're going to say Let the storm rage on The cold never bothered me anyway
    </p>
    <p>
      <Button variant="warning">Learn more</Button>
    </p>
    </Jumbotron>

      {/* 아트 디자인 수집 목록*/}
      <div className="container">
        <div className="row">
          {
            art.map(
              (a, i) => { // a는 art // i는 숫자
                return <Card art={a} i={i} key={i}/> // key 는 리액트에서 요소 구분을 위해 필요
              })
          }
        </div>
      </div>

    </div>
  );
}


function Card(props){
  return( 
    // 열을 네개로 나눔
      <div className="col-md-4">
        <img src={'../artimg/artimg_'+(props.i+1)+'.jpg'} width="100%" height="100%" /> 
        <h4>{props.art.title}</h4>
        <p>{props.art.content}</p>
      </div>    
  )
}

export default App;
