import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Home() {
  return (
    <Nav  variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">FAQComponets</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Customizable Modal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Customizable Modal</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Home