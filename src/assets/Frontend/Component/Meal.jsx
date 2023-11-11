import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-responsive";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import {Row, Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import DataTable from "datatables.net";
function MealList() {
    const [selectedMonth, setSelectedMonth] = useState("");
    useEffect(() => {
      // Initialize DataTable in the useEffect hook to make sure the DOM is ready
      const table = new DataTable("#example", {
        fixedHeader: true,
        responsive: true,
      });
      const currentDate = new Date();
      const currentMonth = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}`;
      setSelectedMonth(currentMonth);
      return () => table.destroy();
    }, []); // Empty dependency array to run the effect only once after the initial render
  
    return (
      <div>
        <Container>
        <Row className="align-items-center mb-3">
            <Col sm={3} className="my-1">
              <Form>
                <Form.Label
                  htmlFor="inlineFormInputGroupUsername"
                  visuallyHidden
                >
                  Date
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>Date</InputGroup.Text>
                  <Form.Control
                    id="inlineFormInputGroupDate"
                    placeholder=""
                    type="month"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col xs="auto" className="my-1">
              <Button className="btn btn-dark" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
          <table id="example" className="display nowrap">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Total Meal</th>
                <th>Meal Rate</th>
                <th>Total Cost</th>
                <th>Total Deposit</th>
                <th>Manager Will Get</th>
                <th>Manager Will Give</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rafiul Islam</td>
  
                <td>01701729512</td>
                <td>12</td>
                <td>12</td>
                <td>2700</td>
                <td>2000</td>
                <td>00</td>
                <td>20</td>
                <td>
                  <Button className="btn-info">Note</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
  export default MealList;