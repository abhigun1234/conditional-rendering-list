import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route,Routes} from "react-router-dom"

import Header from './Header';
import PageNotFound from './PageNotFound';
import Login from './Login';
import DashBoard from './DashBoard'
import MatchNotFound from './MatchNotFound';
import NavBarComponent from './NavBarComponent';
import ConditionalRendering from './ConditionalRendering';
import StateDemo from './StateDemo';
import Parent from './Parent';
import Person from './Person';
import ListData from './ListData';
import ClassState from './ClassState';
function App() {
  return (

    
<div>


{/* <ListData></ListData> */}
 <ConditionalRendering></ConditionalRendering>
 {/* <ClassState></ClassState> */}
</div>


//    <BrowserRouter>
//    <Header></Header>
//  <Routes>
//  <Route path="/" exact  element={<IplTeams />}>
//   </Route>
//    <Route path="/dash" exact  element={<DashBoard />}>
     
//    </Route>
//    <Route path="/stu" exact  element={<Students />}>
     
//      </Route>
//      <Route path="*"   element={<PageNotFound />}>
     
//      </Route>
//      </Routes>

//    </BrowserRouter>
  );
}

export default App;
