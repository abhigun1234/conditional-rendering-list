import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route,Routes} from "react-router-dom"

import Header from './Header';
import PageNotFound from './PageNotFound';
import Login from './Login';
import DashBoard from './DashBoard'
import MatchNotFound from './MatchNotFound';
import NavBarComponent from './NavBarComponent';
function App() {
  return (

    
<BrowserRouter>
<NavBarComponent></NavBarComponent>
<Routes>

<Route path='/' exact  element={<Login />}></Route>
<Route path='/dash' exact element={<DashBoard />}></Route>
<Route path='*' exact element={<MatchNotFound />}></Route>
</Routes>

</BrowserRouter>


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
