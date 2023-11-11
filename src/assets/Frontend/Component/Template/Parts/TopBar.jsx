import { useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import MealList from "../../MealLSystem";

// Pages
const Home = () => {
  return (
    <div>
      <MealList />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <Navbar className="navbar" onClick={(e) => e.stopPropagation()}>
        <Container>
          <NavLink exact to="/" className="nav-logo">
            Meal Calculations
            <i className="bi bi-calculator" style={{color: "#ff0000",}}></i>
                      </NavLink>
          <Nav className={click ? "nav-menu active" : "nav-menu"}>
            <Nav.Link
              as={NavLink}
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
