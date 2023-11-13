import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Meal from "./Meal";
import Costs from "./Costs";
import Deposits from "./Deposits";

const MealList = () => {
  return (
    <div>
      <Meal />
    </div>
  );
};

const MealCosts = () => {
  return (
    <div>
      <Costs />
    </div>
  );
};
const MealDeposits = () => {
  return (
    <div>
      <Deposits />
    </div>
  );
};

function MealLSystem() {
  return (
    <Container>
      <h2>Meal Calculations</h2>
      <Tabs
        defaultActiveKey="meal"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab
          eventKey="meal"
          title={
            <div style={{ color: "blue", fontWeight: "bold" }}>Meal List</div>
          }
        >
          <MealList />
        </Tab>

        <Tab
          eventKey="cost"
          title={
            <div style={{ color: "red", fontWeight: "bold" }}>Meal Costs</div>
          }
        >
          <MealCosts />
        </Tab>
        <Tab
          eventKey="deposits"
          title={
            <div style={{ color: "green", fontWeight: "bold" }}>
              Meal Deposits
            </div>
          }
        >
          <MealDeposits />
        </Tab>
      </Tabs>
    </Container>
  );
}
export default MealLSystem;
