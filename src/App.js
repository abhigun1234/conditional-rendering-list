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
import RenderList from './RenderList';
import IplTeams from './IplTeams';
import JsxDemo from './Jsxdemo';
import ProductList from './ProductList';
import Ecommercedash from './Ecommercedash';
function App() {
  return (

    
<div>

{/* <BrowserRouter>
   <Header></Header>
 <Routes>
 <Route path="/" exact  element={<DashBoard />}>
  </Route>
  <Route path="/dash" exact  element={<DashBoard />}>
     
     </Route>
   <Route path="/productlist" exact  element={<ProductList />}>
     
   </Route>
     <Route path="*"   element={<PageNotFound />}>
     
     </Route>
     </Routes>

   </BrowserRouter> */}
{/* <ConditionalRendering></ConditionalRendering> */}
{/* <IplTeams primary={false} secondry={true}> </IplTeams> */}
{/* <ProductList></ProductList> */}
{/* <ConditionalRendering></ConditionalRendering> */}
{/* <IplTeams></IplTeams> */}
<Ecommercedash></Ecommercedash>
</div>


 
  );
}

export default App;
