import home from './component/home'
import about from './component/about'
import contact from './component/contact'
import login from './component/login'
import './App.css';
import { render } from '@testing-library/react';


function App extends Component() {
  render() {
  return ( 
    <HashRouter>
      <div>
      <ul className="header">
        
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/">ABOUT</NavLink></li>
        <li><NavLink to="/">CONTACT</NavLink></li>
        <li><NavLink to="/">LOGIN</NavLink></li>

      <div className="content" >
        <Route path="/" component ={home}/>
        <Route path="/" component ={about}/>
        <Route path="/" component ={contact}/>
        <Route path="/" component ={login}/>

      </div>
    </ul>
      </div>
  
    </HashRouter>
  
  );
}
}
export default App;