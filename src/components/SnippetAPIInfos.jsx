import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SnippetAPIInfos = ({ name, description }) => {
  return (
    <div style={{
      display: 'inline-block',
      margin: '10px'
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Link as={Link} to={`/details`}>Voir détails</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SnippetAPIInfos;