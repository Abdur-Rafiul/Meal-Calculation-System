import  { useState, useEffect } from "react";
import { Row, Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';

function Deposits() {
  const [selectedMonth, setSelectedMonth] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;
    setSelectedMonth(currentMonth);

    const table = $("#deposits").DataTable({
      fixedHeader: true,
      responsive: true,
    });

    return () => table.destroy(); 
  }, []); 

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
        <table id="deposits" className="display nowrap">
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

export default Deposits;
