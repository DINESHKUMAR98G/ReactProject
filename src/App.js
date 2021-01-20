import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserBooks from './Library/UserBooks';

import CreateUser from './Library/CreateUser';
import UserPage from './Library/UserPage';
import RegisterPage from './Library/RegisterPage';

import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import Navi from './Library/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  
  return (
<div className="Task">
<div className="header">


  <h1>LIBRARY MANAGEMENT SYSTEM</h1>
  

  <Router>
    <Navi />
    <Switch>
      <Route path="/userpage" component={UserPage} />
      <Route path="/userbooks" component={UserBooks} />
      <Route path="/createuser" component={CreateUser} />
      <Route path="/registerpage" component={RegisterPage} />
      </Switch>
  </Router>
  
    

    <div className="bg">
    <div class="main_content">
    <div class="info">
              <div>A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study. dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing.A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study.
    
              </div>
                {/* <DisplayEmployees /> */}
                <Carousel >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                   src="https://image.shutterstock.com/image-photo/books-new-modern-library-stuttgart-600w-674867536.jpg"
                    alt="First slide"
                    width={600} height={400}
                  />
                  <Carousel.Caption>
                    <h3>ANNA LIBRARY</h3>
                    <p>CHENNAI</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
                    alt="Third slide"
                    width={600} height={400}
                  />

                  <Carousel.Caption>
                    <h3>NATIONAL LIBRARY</h3>
                    <p>BANGALORE</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
                    alt="Third slide"
                    width={600} height={400}
                  />

                  <Carousel.Caption>
                    <h3>CENTRAL LIBRARY</h3>
                    <p>NOIDA</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>


              </div>

</div>

</div>
</div>

</div>
)}
export default App;