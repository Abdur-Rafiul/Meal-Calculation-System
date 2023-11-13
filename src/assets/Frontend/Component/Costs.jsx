import  { useState, useEffect } from "react";
import { Row, Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';
function Costs() {
  const [selectedMonth, setSelectedMonth] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;
    setSelectedMonth(currentMonth);
    const table = $("#costs").DataTable({
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
        <table id="costs" className="display nowrap w-100">
          <thead>
            <tr>
              <th className="text-center">Total Cost</th>
              <th className="text-center">Date</th>
              <th className="text-center">Details</th>
              <th className="text-center">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100</td>
              <td>30-12-1999</td>
              <td>
              <Button className="btn-dark">View</Button>
              </td>
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

export default Costs;
