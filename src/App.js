import React, {
  Component
} from 'react';
import './app.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CoolButton from './components/CoolButton';


class App extends Component {
  render() {

    return ( <div>
    <Navbar/>
    <Form name="Name" type="text" placeholder="Alex Smith"/>
    <Form name="Email" type="email" placeholder="alexsmith@gmail.com"/>
    
    <CoolButton>button1</CoolButton>
    

    </div>
    )
} } 




export default App;