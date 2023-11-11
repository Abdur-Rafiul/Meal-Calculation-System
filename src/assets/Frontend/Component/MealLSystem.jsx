import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Meal from "./Meal";

const MealList = () => {
  return (
    <div>
      <Meal />
    </div>
  );
};

function MealLSystem() {

  return (
    <Container>
      <h2>Meal Calculations</h2>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <BrowserRouter>
            <div className="pages">
              <Switch>
                <Route exact path="/" component={MealList} />
              </Switch>
            </div>
          </BrowserRouter>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Tab content for Contact
        </Tab>
      </Tabs>
    </Container>
  );
}
export default MealLSystem;
