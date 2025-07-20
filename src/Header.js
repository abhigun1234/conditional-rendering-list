// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
// import { Link } from 'react-router-dom';
// function Header(props) {
//     return (
//         <div>
//             <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">MyCart</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         {/* <Nav.Link href="#home">Home</Nav.Link> */}
//         <Link to='/dash' className='nav-link'>Home</Link>
//         <Link to='/productlist' className='nav-link'>Products</Link> 
//         <Link to='/dash' className='nav-link'>AboutUs</Link>
        
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//         </div>
//     );
// }

// export default Header;
import React from 'react';

function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Header;