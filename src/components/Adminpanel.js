import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Row,Col} from 'reactstrap';

const data = {
  labels: ['New Tickets', 'New Users', 'New Patients'],
  datasets: [
    {
      label: 'New Events',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const AdminPanel = () => (
  <>
    <div className='header'>
      <h1 className='title'>New Events</h1>
      <div className='links'>
      </div>
    </div>
    <Row className="my-5">
                <Col>
                  <Doughnut data={data} /> {/* Create User Section*/}
                </Col>
                <Col>
                </Col>
            </Row>
  </>
);

export default AdminPanel;