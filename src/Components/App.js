import React, { Component } from 'react';
import '../Styles/App.css';
import PlayList from './PlayList'
import NavBar from '../Components/NavBar'
import PlayListForm from './PlayListForm'


class App extends Component {
render(){
return(
  <div className="App">
       <NavBar />
       <PlayListForm/>
       <PlayList/>
     </div>
)
}
}

export default App
